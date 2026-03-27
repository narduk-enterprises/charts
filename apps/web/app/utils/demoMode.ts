export function hasUiAuditFlag() {
  if (import.meta.server) {
    return false
  }

  return new URLSearchParams(window.location.search).get('ui-audit') === '1'
}

export function createSeededRandom(seed: number) {
  let state = seed >>> 0

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 0x1_0000_0000
  }
}
