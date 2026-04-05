<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Terms — Narduk Charts'
const pageDescription =
  'Terms for the Narduk Charts public site, with pointers to the MIT license that governs the software itself.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-scale' },
})

useWebPageSchema({ name: pageTitle, description: pageDescription })
useSiteBreadcrumbs([{ label: 'Terms', to: '/terms' }])
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-3xl space-y-8">
      <div class="space-y-4">
        <UBadge color="neutral" variant="subtle" class="w-fit rounded-full">Terms</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Terms of use
        </h1>
        <p class="text-sm text-muted">Last updated: April 5, 2026</p>
      </div>

      <div class="space-y-6 text-muted">
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">Website content</h2>
          <p>
            This site provides product and documentation guidance for Narduk Charts. Content may
            change without notice as the library and public site evolve.
          </p>
        </section>
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">Software license</h2>
          <p>
            The charting library itself is governed by the MIT License published in the source
            repository. This public site does not replace or override that software license.
          </p>
        </section>
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">No professional advice</h2>
          <p>
            Nothing on this site constitutes trading, investment, legal, or compliance advice. It is
            product information intended to support evaluation and implementation planning.
          </p>
        </section>
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">Third-party links</h2>
          <p>
            Links to GitHub or other external properties are provided for convenience. Their
            content, terms, and availability are governed by those services.
          </p>
        </section>
      </div>
    </div>
  </UContainer>
</template>
