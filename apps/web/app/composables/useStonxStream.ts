import {
  STONX_STREAM_PING_INTERVAL_MS,
  parseStonxStreamMessage,
  stonxPingJson,
  stonxSubscribeJson,
  stonxUnsubscribeJson,
  type StonxPriceRow,
  type StonxStreamInbound,
} from '~/utils/stonxStream'

export type StonxStreamStatus =
  | 'idle'
  | 'connecting'
  | 'connected'
  | 'reconnecting'
  | 'offline'

export interface UseStonxStreamOptions {
  url: string
  channels: string[]
  onMessage?: (msg: StonxStreamInbound) => void
  onConnected?: () => void
  onReconnect?: () => void
  baseReconnectDelayMs?: number
  maxReconnectDelayMs?: number
  staleAfterMs?: number
}

export function useStonxStream(options: UseStonxStreamOptions) {
  const status = ref<StonxStreamStatus>('idle')
  let ws: WebSocket | null = null
  let intentionalClose = false
  let pingInterval: ReturnType<typeof setInterval> | null = null
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let reconnectAttempt = 0
  let staleTimer: ReturnType<typeof setTimeout> | null = null
  let sessionHandshakeDone = false

  const baseDelay = options.baseReconnectDelayMs ?? 1_000
  const maxDelay = options.maxReconnectDelayMs ?? 30_000
  const staleMs = options.staleAfterMs ?? 0

  function clearPing() {
    if (pingInterval) {
      clearInterval(pingInterval)
      pingInterval = null
    }
  }

  function clearReconnectTimer() {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }
  }

  function clearStaleTimer() {
    if (staleTimer) {
      clearTimeout(staleTimer)
      staleTimer = null
    }
  }

  function bumpStaleWatch() {
    clearStaleTimer()
    if (staleMs <= 0 || !ws) return
    staleTimer = setTimeout(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        try {
          ws.close(4000, 'stale')
        }
        catch {
          /* ignore */
        }
      }
    }, staleMs)
  }

  function startPing() {
    clearPing()
    pingInterval = setInterval(() => {
      if (ws?.readyState === WebSocket.OPEN) {
        try {
          ws.send(stonxPingJson())
        }
        catch {
          /* ignore */
        }
      }
    }, STONX_STREAM_PING_INTERVAL_MS)
  }

  function scheduleReconnect() {
    if (intentionalClose) return
    clearReconnectTimer()
    const exp = Math.min(maxDelay, baseDelay * 2 ** reconnectAttempt)
    const jitter = 0.85 + Math.random() * 0.3
    const delay = Math.round(exp * jitter)
    if (reconnectAttempt > 0) status.value = 'reconnecting'
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null
      openSocket()
    }, delay)
    reconnectAttempt += 1
  }

  function openSocket() {
    if (import.meta.server) {
      status.value = 'offline'
      return
    }
    clearPing()
    clearStaleTimer()
    if (ws) {
      try {
        ws.close()
      }
      catch {
        /* ignore */
      }
      ws = null
    }

    status.value = reconnectAttempt === 0 ? 'connecting' : 'reconnecting'
    try {
      ws = new WebSocket(options.url)
    }
    catch {
      status.value = 'offline'
      scheduleReconnect()
      return
    }

    ws.addEventListener('open', () => {
      sessionHandshakeDone = false
      try {
        ws!.send(stonxSubscribeJson(options.channels))
      }
      catch {
        /* ignore */
      }
      startPing()
      bumpStaleWatch()
    })

    ws.addEventListener('message', (event: MessageEvent) => {
      bumpStaleWatch()
      let parsed: unknown
      try {
        parsed = JSON.parse(event.data as string)
      }
      catch {
        return
      }
      const msg = parseStonxStreamMessage(parsed)
      if (!msg) return

      if (msg.type === 'connected' || msg.type === 'price_update') {
        status.value = 'connected'
        reconnectAttempt = 0
        if (!sessionHandshakeDone) {
          sessionHandshakeDone = true
          options.onConnected?.()
        }
      }
      else if (msg.type === 'pong' && status.value !== 'connected') {
        status.value = 'connected'
        reconnectAttempt = 0
      }

      options.onMessage?.(msg)
    })

    ws.addEventListener('error', (ev: Event) => {
      if (ev.target !== ws) return
      clearPing()
      clearStaleTimer()
      if (status.value !== 'offline') status.value = 'offline'
    })

    ws.addEventListener('close', (ev: CloseEvent) => {
      if (ev.target !== ws) return
      const hadLiveSession = sessionHandshakeDone
      clearPing()
      clearStaleTimer()
      sessionHandshakeDone = false
      ws = null
      if (!intentionalClose) {
        if (hadLiveSession) options.onReconnect?.()
        status.value = 'offline'
        scheduleReconnect()
      }
      else {
        status.value = 'idle'
      }
    })
  }

  function connect() {
    intentionalClose = false
    reconnectAttempt = 0
    clearReconnectTimer()
    openSocket()
  }

  function disconnect() {
    intentionalClose = true
    clearReconnectTimer()
    clearPing()
    clearStaleTimer()
    if (ws) {
      try {
        ws.send(stonxUnsubscribeJson(options.channels))
      }
      catch {
        /* ignore */
      }
      try {
        ws.close()
      }
      catch {
        /* ignore */
      }
      ws = null
    }
    status.value = 'idle'
  }

  onUnmounted(() => {
    disconnect()
  })

  return {
    status,
    connect,
    disconnect,
    pickRow(rows: StonxPriceRow[], symbol: string): StonxPriceRow | undefined {
      return rows.find((r) => r.symbol === symbol)
    },
  }
}
