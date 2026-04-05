<script setup lang="ts">
definePageMeta({ layout: 'marketing' })

const pageTitle = 'Enterprise & evaluation — Narduk Charts'
const pageDescription =
  'How trading and fintech teams evaluate narduk-charts: scope, extensibility, auditability, and integration posture.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription },
})
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Enterprise</h1>
    <p class="mt-4 max-w-3xl text-muted">
      The open-source library ships under MIT; production integrations typically pair it with your
      data plane, auth, and execution stack. Below is how teams evaluate fit before a wider rollout.
    </p>
    <div class="mt-10 max-w-3xl space-y-4 text-muted">
      <p>
        <strong class="text-highlighted">Licensing.</strong>
        <code class="text-primary">@narduk-enterprises/narduk-charts</code> is MIT-licensed. Forks
        and private mirrors are expected; attribute the license file in distributions you ship.
      </p>
      <p>
        <strong class="text-highlighted">Scope clarity.</strong> Core charts exclude broker-specific
        execution widgets so compliance teams can review a bounded surface.
      </p>
      <p>
        <strong class="text-highlighted">Extensibility.</strong> Overlay slot + exposed metrics +
        serializable drawings let you add proprietary analytics without forking renders.
      </p>
      <p>
        <strong class="text-highlighted">Evidence.</strong> PNG export with inlined CSS supports
        audit artifacts; deterministic studies simplify golden tests.
      </p>
      <p>
        <strong class="text-highlighted">Versioning.</strong> Semver on the npm package; pin exact
        versions in lockfiles and read release notes for interaction contract tweaks.
      </p>
      <p>
        <strong class="text-highlighted">Support &amp; SLAs.</strong> Community issues and
        discussions run on GitHub. Dedicated support tiers, custom SLAs, and integration reviews are
        available through Narduk Enterprises for qualifying desks—use your procurement channel or
        site contact to scope workload, response times, and security questionnaires.
      </p>
      <p>
        <strong class="text-highlighted">Typical architecture.</strong> Browser or embedded WebView
        clients consume Vue components; your Workers or APIs stream OHLC and study inputs; PNG/SVG
        exports attach to ticketing and compliance archives.
      </p>
      <p>
        <strong class="text-highlighted">Evaluation path.</strong> Most teams validate fit by
        pairing the showcase and docs with the security posture and pricing routes on this site,
        then opening a direct technical conversation once the surface area is clear.
      </p>
    </div>
    <div class="mt-10 flex flex-wrap gap-2">
      <UButton to="/docs/trading-ui" color="primary" variant="soft">Trading UI notes</UButton>
      <UButton to="/product/performance" color="neutral" variant="outline"
        >Performance posture</UButton
      >
      <UButton to="/product/integration" color="neutral" variant="outline">Integration</UButton>
      <UButton to="/pricing" color="neutral" variant="outline">Pricing</UButton>
      <UButton to="/security" color="neutral" variant="ghost">Security</UButton>
      <UButton to="/contact" color="neutral" variant="ghost">Contact</UButton>
    </div>
  </UContainer>
</template>
