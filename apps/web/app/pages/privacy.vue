<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Privacy — Narduk Charts'
const pageDescription =
  'How the Narduk Charts public site handles analytics, mailto-based contact, and site-scoped privacy questions.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-lock' },
})

useWebPageSchema({ name: pageTitle, description: pageDescription })
useSiteBreadcrumbs([{ label: 'Privacy', to: '/privacy' }])
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-3xl space-y-8">
      <div class="space-y-4">
        <UBadge color="neutral" variant="subtle" class="w-fit rounded-full">Privacy</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Privacy policy
        </h1>
        <p class="text-sm text-muted">Last updated: April 5, 2026</p>
      </div>

      <div class="space-y-6 text-muted">
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">Scope</h2>
          <p>
            This policy covers the public site operated from the
            <code class="rounded bg-muted px-1 py-0.5 text-xs">charts</code> repository. The
            open-source library runs inside your own applications; your product policies govern
            end-user data there.
          </p>
        </section>
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">Analytics on this site</h2>
          <p>
            When analytics keys are configured, the site may record navigation, CTA, and support
            inquiry events to understand which routes help evaluators verify the product. When those
            keys are absent, the analytics hooks remain no-ops.
          </p>
        </section>
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">Contact submissions</h2>
          <p>
            The contact page composes a
            <code class="rounded bg-muted px-1 py-0.5 text-xs">mailto:</code> link. Message content
            is passed to your email client and provider; it is not stored by this site before the
            handoff.
          </p>
        </section>
        <section class="space-y-3">
          <h2 class="text-lg font-semibold text-highlighted">Cookies and local storage</h2>
          <p>
            If analytics are enabled, the configured provider may use cookies or local storage
            according to its own documentation. Disabling those keys removes that site behavior.
          </p>
        </section>
      </div>
    </div>
  </UContainer>
</template>
