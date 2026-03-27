<script setup lang="ts">
import { capabilityNav, chartFamilies } from '~/data/site'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Chart showcase — every Narduk Charts family'
const pageDescription =
  'Browse candlestick, line, bar, pie, scatter, histogram, and stack layouts with links to live demos and API entries.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })

const { captureShowcaseView } = useSiteAnalytics()
onMounted(() => captureShowcaseView('index'))
</script>

<template>
  <div>
    <section class="border-b border-default/60 bg-muted/20 py-12 sm:py-16">
      <UContainer>
        <UBadge color="primary" variant="subtle" class="mb-4 rounded-full">
          Showcase
        </UBadge>
        <h1 class="max-w-3xl text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Every chart family shipped in <code class="text-primary">@narduk-enterprises/narduk-charts</code>
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          This index mirrors the public component exports. Each card links to a live demo, prop guidance, and the matching API reference page.
        </p>
      </UContainer>
    </section>

    <UContainer class="py-12">
      <h2 class="mb-6 text-xl font-semibold text-highlighted">
        Chart families
      </h2>
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <UCard
          v-for="c in chartFamilies"
          :key="c.id"
          class="border-default/80 bg-default/40"
        >
          <div class="space-y-3 p-1">
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-lg font-semibold text-highlighted">
                {{ c.name }}
              </h3>
              <UBadge color="neutral" variant="subtle" size="xs">
                {{ c.id }}
              </UBadge>
            </div>
            <p class="text-sm leading-relaxed text-muted">
              {{ c.summary }}
            </p>
            <div class="flex flex-wrap gap-2 pt-1">
              <UButton :to="c.route" size="sm" color="primary" @click="captureShowcaseView(c.id)">
                Live demo
              </UButton>
              <UButton :to="c.api" size="sm" color="neutral" variant="soft">
                API
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <h2 class="mb-6 mt-14 text-xl font-semibold text-highlighted">
        Capability tours
      </h2>
      <p class="mb-4 max-w-2xl text-sm text-muted">
        Interaction surfaces that apply across families: zoom models, synchronized time domains, streaming buffers, studies, exports, and themes.
      </p>
      <div class="grid gap-3 sm:grid-cols-2">
        <NuxtLink
          v-for="p in capabilityNav"
          :key="p.to"
          :to="p.to"
          class="flex items-center justify-between rounded-xl border border-default/70 bg-muted/15 px-4 py-3 text-sm font-medium text-highlighted transition-colors hover:border-primary/40 hover:bg-primary/5"
          @click="captureShowcaseView(p.to)"
        >
          {{ p.label }}
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4 text-muted" />
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>
