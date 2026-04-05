<script setup lang="ts">
import { LIBRARY_SECURITY_HREF } from '~/data/site'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Security & reliability — Narduk Charts'
const pageDescription =
  'Dependency posture, disclosure path, and production reliability framing for the Narduk Charts library and public site.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-shield-check' },
})

useWebPageSchema({ name: pageTitle, description: pageDescription })
useSiteBreadcrumbs([{ label: 'Security', to: '/security' }])

const { captureGithubOutbound, captureNav } = useSiteAnalytics()
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-3xl space-y-8">
      <div class="space-y-4">
        <UBadge color="neutral" variant="subtle" class="w-fit rounded-full">Security</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Security and reliability posture
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          Narduk Charts is a client-side Vue library distributed as source and npm packages. The
          public site exists to help teams evaluate it, but deployment, transport, and auth remain
          under the adopting product's control.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Dependency posture</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Runtime surface stays intentionally small: Vue is the primary peer dependency, with
            package lockfiles and release notes available for review before upgrades.
          </p>
        </UCard>
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Disclosure path</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Use the library repository's security policy for coordinated disclosure. General
            implementation defects and feature requests still belong in the normal issue flow.
          </p>
          <UButton
            class="mt-4"
            :to="LIBRARY_SECURITY_HREF"
            target="_blank"
            color="primary"
            @click="captureGithubOutbound('library')"
          >
            Security policy
          </UButton>
        </UCard>
      </div>

      <div class="space-y-4 text-muted">
        <h2 class="text-lg font-semibold text-highlighted">Operational reliability</h2>
        <p>
          Reliability in production depends on the host application's data correctness, retry
          policy, and UI state handling. The chart layer exposes explicit props, models, and events
          so you can align it with your own observability and incident model.
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <UButton
          to="/product/enterprise"
          color="neutral"
          variant="outline"
          @click="captureNav('/product/enterprise')"
        >
          Enterprise fit
        </UButton>
        <UButton to="/contact" color="neutral" variant="ghost" @click="captureNav('/contact')">
          Contact
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
