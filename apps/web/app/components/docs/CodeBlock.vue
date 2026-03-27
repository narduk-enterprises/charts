<script setup lang="ts">
const props = defineProps<{
  code: string
  /** Analytics context slug */
  context: string
}>()

const { captureCodeCopy } = useSiteAnalytics()
const copied = ref(false)

async function copy() {
  if (!import.meta.client) return
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    captureCodeCopy(props.context)
    if (typeof globalThis.setTimeout === 'function') {
      globalThis.setTimeout(() => {
        copied.value = false
      }, 1600)
    }
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="group relative rounded-lg border border-default/80 bg-muted/30">
    <UButton
      size="xs"
      color="neutral"
      variant="soft"
      class="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
      @click="copy"
    >
      {{ copied ? 'Copied' : 'Copy' }}
    </UButton>
    <pre
      class="max-h-[28rem] overflow-auto p-4 text-xs leading-relaxed text-highlighted sm:text-sm"
    ><code>{{ code }}</code></pre>
  </div>
</template>
