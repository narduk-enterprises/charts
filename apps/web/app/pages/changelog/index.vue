<script setup lang="ts">
import { LIBRARY_CHANGELOG_HREF, LIBRARY_GITHUB_HREF } from '~/data/site'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Changelog — Narduk Charts'
const pageDescription =
  'Release themes for Narduk Charts, with the authoritative line-by-line history maintained in the library repository.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-scroll-text' },
})

useWebPageSchema({ name: pageTitle, description: pageDescription })
useSiteBreadcrumbs([{ label: 'Changelog', to: '/changelog' }])

const { captureGithubOutbound, captureNav } = useSiteAnalytics()

const releaseThemes = [
  'Trading-grade OHLC and candlestick surfaces with zoom, pan, brush, and volume workflows.',
  'Linked layouts, streaming helpers, and chart-stack coordination for desk-oriented products.',
  'Expanded docs, showcase examples, and API coverage aligned to the public chart exports.',
  'Reliability follow-up work around accessibility, export flows, and production evaluation polish.',
] as const
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-3xl space-y-8">
      <div class="space-y-4">
        <UBadge color="neutral" variant="subtle" class="w-fit rounded-full">Changelog</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Release history with the source of truth still in GitHub
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          This page summarizes the current release direction. The canonical changelog remains in the
          library repository so the implementation and release notes stay coupled.
        </p>
      </div>

      <UCard class="border-default/80 bg-default/40">
        <h2 class="text-lg font-semibold text-highlighted">Recent themes</h2>
        <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
          <li v-for="theme in releaseThemes" :key="theme">{{ theme }}</li>
        </ul>
      </UCard>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Read the exact history</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Use the repository changelog when you need the precise version-by-version narrative.
          </p>
          <UButton
            class="mt-4"
            :to="LIBRARY_CHANGELOG_HREF"
            target="_blank"
            color="primary"
            @click="captureGithubOutbound('library')"
          >
            Open CHANGELOG.md
          </UButton>
        </UCard>
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Plan upgrades safely</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Pair changelog review with the migration guide and API reference before bumping the
            package in production workspaces.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <UButton
              to="/docs/migration"
              color="neutral"
              variant="outline"
              @click="captureNav('/docs/migration')"
            >
              Migration guide
            </UButton>
            <UButton
              to="/docs/api"
              color="neutral"
              variant="ghost"
              @click="captureNav('/docs/api')"
            >
              API reference
            </UButton>
          </div>
        </UCard>
      </div>

      <ULink
        :to="LIBRARY_GITHUB_HREF"
        target="_blank"
        class="inline-flex text-sm font-medium text-primary hover:underline"
        @click="captureGithubOutbound('library')"
      >
        Browse the library repository
      </ULink>
    </div>
  </UContainer>
</template>
