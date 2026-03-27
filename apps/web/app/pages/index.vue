<script setup lang="ts">
import { NardukCandleChart } from '@narduk-enterprises/narduk-charts'
import { LIBRARY_GITHUB_HREF, chartFamilies } from '~/data/site'
import { demoCandles } from '~/lib/demo/candles'

definePageMeta({ layout: 'marketing' })

const config = useRuntimeConfig()
const appName = config.public.appName || 'Narduk Charts'
const pageTitle = `${appName} — Trading-grade Vue charting`
const pageDescription =
  'SVG OHLC, synced panes, studies, and export-ready APIs for brokerage and institutional desks. Open source, TypeScript-first, Vue 3.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({
  name: pageTitle,
  description: pageDescription,
})

const { chartDark } = useChartAppearance()
const { captureCta, captureGithubOutbound } = useSiteAnalytics()

const heroBars = demoCandles(160, { fixedAnchor: Date.UTC(2026, 1, 20, 9, 30, 0) })

const capabilityCards = [
  {
    t: 'Interaction models',
    d: 'Line zoom on categories; candle zoom on time + indices; magnetic crosshair and HUD.',
    i: 'i-lucide-mouse-pointer-2',
  },
  {
    t: 'Linked layouts',
    d: 'v-model:domain across candles; map x-window to studies with time/index helpers.',
    i: 'i-lucide-link',
  },
  {
    t: 'Realtime buffers',
    d: 'Throttled candle and scalar streams with rolling windows for live desks.',
    i: 'i-lucide-radio',
  },
  {
    t: 'Theming',
    d: 'High-contrast, print, and colorblind-safe palettes plus explicit dark overrides.',
    i: 'i-lucide-contrast',
  },
  {
    t: 'Export & fullscreen',
    d: 'PNG rasterization with CSS inlining; browser fullscreen helper for tiles.',
    i: 'i-lucide-download',
  },
  {
    t: 'Performance hooks',
    d: 'Draw caps and aggregation utilities sized to plot width.',
    i: 'i-lucide-cpu',
  },
] as const
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-default/60">
      <div
        class="pointer-events-none absolute inset-0 bg-linear-to-b from-muted/40 to-transparent"
      />
      <UContainer class="relative py-14 sm:py-20 lg:py-24">
        <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div class="space-y-6">
            <UBadge color="primary" variant="subtle" class="w-fit rounded-full">
              Enterprise trading &amp; fintech interfaces
            </UBadge>
            <h1
              class="text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl lg:text-6xl"
            >
              Precision charting for serious market software.
            </h1>
            <p class="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Vue 3 SVG components with explicit zoom models, synchronized time domains, rolling
              buffers, and deterministic studies—without canvas lock-in.
            </p>
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
              <UButton
                size="xl"
                color="primary"
                to="/docs/quickstart"
                trailing-icon="i-lucide-arrow-right"
                @click="captureCta('hero_get_started')"
              >
                Get started
              </UButton>
              <UButton
                size="xl"
                color="neutral"
                variant="outline"
                to="/showcase"
                @click="captureCta('hero_showcase')"
              >
                Explore showcase
              </UButton>
              <UButton
                size="xl"
                color="neutral"
                variant="ghost"
                :to="LIBRARY_GITHUB_HREF"
                target="_blank"
                external
                icon="i-lucide-github"
                @click="captureGithubOutbound('library')"
              >
                Source
              </UButton>
            </div>
            <div class="flex flex-wrap gap-4 text-xs text-muted">
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-shield-check" class="h-4 w-4 text-primary" /> TypeScript
                public API
              </span>
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-gauge" class="h-4 w-4 text-primary" /> SVG + accessibility
                defaults
              </span>
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-layers" class="h-4 w-4 text-primary" /> Tree-shakable entries
              </span>
            </div>
          </div>

          <UCard class="border-default/80 bg-default/50 shadow-lg ring-1 ring-default/40">
            <div class="space-y-3 p-2 sm:p-3">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-muted">
                    Interactive sample
                  </p>
                  <p class="text-sm font-medium text-highlighted">
                    Synthetic OHLCV — production components, demo data
                  </p>
                </div>
                <UBadge color="neutral" variant="subtle">@narduk-enterprises/narduk-charts</UBadge>
              </div>
              <NardukCandleChart
                class="w-full min-w-0"
                :bars="heroBars"
                :height="340"
                :dark="chartDark"
                :zoomable="true"
                :show-volume="true"
                :show-brush="true"
                :show-crosshair="true"
                chart-description="Synthetic OHLCV for marketing preview."
              />
              <noscript>
                <p class="mt-2 text-xs text-muted">
                  Interactive zoom and crosshair require JavaScript; static frame above is an SVG
                  snapshot from the same component props.
                </p>
              </noscript>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default/60 py-14 sm:py-16">
      <UContainer>
        <h2 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">
          What this library is
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          <strong class="text-highlighted">@narduk-enterprises/narduk-charts</strong> is a focused
          Vue 3 charting kit for dashboards and trading terminals: candlesticks with volume and
          brush, multi-axis lines, bars, pie, scatter, histograms, and a stack primitive for linked
          panes. Indicators are pure functions you own—compute anywhere, render with the same SVG
          pipeline.
        </p>
      </UContainer>
    </section>

    <section class="border-b border-default/60 py-14 sm:py-16">
      <UContainer>
        <h2 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">
          Core capabilities
        </h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="cap in capabilityCards" :key="cap.t" class="border-default/70 bg-muted/10">
            <div class="flex gap-3 p-1">
              <UIcon :name="cap.i" class="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 class="font-semibold text-highlighted">{{ cap.t }}</h3>
                <p class="mt-1 text-sm text-muted">{{ cap.d }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default/60 py-14 sm:py-16">
      <UContainer>
        <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">
              Chart families
            </h2>
            <p class="mt-2 max-w-2xl text-sm text-muted">
              Every exported component has a showcase page, realistic fixtures, and an API entry.
            </p>
          </div>
          <UButton
            to="/showcase"
            color="primary"
            variant="soft"
            trailing-icon="i-lucide-arrow-right"
          >
            Showcase index
          </UButton>
        </div>
        <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            v-for="c in chartFamilies"
            :key="c.id"
            :to="c.route"
            class="rounded-xl border border-default/70 bg-default/30 px-4 py-3 text-sm font-medium text-highlighted transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            {{ c.name }}
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default/60 py-14 sm:py-16">
      <UContainer>
        <h2 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">
          Developer experience
        </h2>
        <p class="mt-4 max-w-3xl text-base text-muted">
          Install
          <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary"
            >@narduk-enterprises/narduk-charts</code
          >, import
          <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary"
            >@narduk-enterprises/narduk-charts/style.css</code
          >, and mount components with typed props and events. Subpath bundles (<code
            class="font-mono text-xs text-primary"
            >/candle</code
          >, <code class="font-mono text-xs text-primary">/studies</code>, …) keep production splits
          predictable.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <UButton to="/docs/installation" variant="outline" color="neutral">Installation</UButton>
          <UButton to="/docs/api" variant="outline" color="neutral">API reference</UButton>
        </div>
      </UContainer>
    </section>

    <section class="border-b border-default/60 py-14 sm:py-16">
      <UContainer>
        <h2 class="text-2xl font-semibold tracking-tight text-highlighted sm:text-3xl">
          Enterprise readiness
        </h2>
        <p class="mt-4 max-w-3xl text-base text-muted">
          Explicit scope: alerts, DOM ladders, Pine script, and social feeds stay <em>out</em> of
          the core library so teams can integrate their own execution stack. What ships is chart
          geometry, interaction contracts, and export surfaces auditors can reason about.
        </p>
        <UButton class="mt-6" to="/product/enterprise" color="neutral" variant="soft">
          Evaluation criteria
        </UButton>
      </UContainer>
    </section>

    <section class="py-16 sm:py-20">
      <UContainer>
        <UCard class="border-primary/25 bg-linear-to-br from-primary/10 via-default/80 to-muted/30">
          <div
            class="flex flex-col gap-6 p-2 sm:flex-row sm:items-center sm:justify-between sm:p-4"
          >
            <div>
              <h2 class="text-xl font-semibold text-highlighted sm:text-2xl">
                Ship charts that match your desk’s quality bar.
              </h2>
              <p class="mt-2 max-w-xl text-sm text-muted">
                Start from the quick start, mirror any showcase in your sandbox, and trace types
                straight to the source on GitHub.
              </p>
            </div>
            <div class="flex flex-col gap-2 sm:items-end">
              <UButton
                size="lg"
                color="primary"
                to="/docs/quickstart"
                @click="captureCta('footer_cta_start')"
              >
                Read the quick start
              </UButton>
              <UButton size="lg" color="neutral" variant="ghost" to="/product/features">
                Product features
              </UButton>
            </div>
          </div>
        </UCard>
      </UContainer>
    </section>
  </div>
</template>
