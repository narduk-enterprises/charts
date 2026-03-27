<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <UCard class="overflow-hidden border-default/80 bg-default/40">
    <div class="border-b border-default/60 px-4 py-3">
      <h3 class="text-sm font-semibold text-highlighted">
        {{ title }}
      </h3>
      <p v-if="description" class="mt-1 text-xs text-muted">
        {{ description }}
      </p>
    </div>
    <div class="min-h-[260px] p-3 sm:p-4">
      <ClientOnly>
        <slot />
        <template #fallback>
          <div class="flex h-64 items-center justify-center rounded-lg border border-dashed border-default/60 text-xs text-muted">
            Loading chart…
          </div>
        </template>
      </ClientOnly>
    </div>
  </UCard>
</template>
