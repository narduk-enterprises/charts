<script setup lang="ts">
import { docsNav } from '~/data/site'

const route = useRoute()
</script>

<template>
  <aside class="hidden w-56 shrink-0 lg:block">
    <div
      class="sticky top-20 space-y-1 border-l border-default/60 pl-4"
      role="navigation"
      aria-label="Documentation"
    >
      <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">On this site</p>
      <NuxtLink
        v-for="item in docsNav"
        :key="item.to"
        :to="item.to"
        class="block rounded-md px-2 py-1.5 text-sm transition-colors"
        :class="
          route.path === item.to || route.path.startsWith(`${item.to}/`)
            ? 'bg-primary/10 font-medium text-primary'
            : 'text-muted hover:bg-muted/50 hover:text-highlighted'
        "
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </aside>
</template>
