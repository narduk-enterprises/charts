<script setup lang="ts">
import { NPM_PACKAGE_NAME } from '~/data/site'

definePageMeta({ layout: 'docs' })

const pageTitle = 'Installation — Narduk Charts'
const pageDescription =
  'Add @narduk-enterprises/narduk-charts to a Vue 3 project, import styles, and use tree-shakable subpath bundles.'

useSeo({ title: pageTitle, description: pageDescription, ogImage: { title: pageTitle, description: pageDescription } })
useWebPageSchema({ name: pageTitle, description: pageDescription })
</script>

<template>
  <article class="prose prose-sm max-w-none dark:prose-invert">
    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Installation</h1>
    <p class="text-muted">Requires Vue <code>^3.3</code>. Charts are SVG-based; no canvas peer dependency.</p>
    <h2 class="text-highlighted">Package</h2>
    <pre class="overflow-x-auto rounded-lg bg-muted/40 p-4 text-xs"><code>pnpm add {{ NPM_PACKAGE_NAME }}</code></pre>
    <h2 class="text-highlighted">Styles</h2>
    <p class="text-muted">Import the stylesheet once (global CSS or Nuxt <code>css</code> array):</p>
    <pre class="overflow-x-auto rounded-lg bg-muted/40 p-4 text-xs"><code>import '{{ NPM_PACKAGE_NAME }}/style.css'</code></pre>
    <p class="text-muted">
      The <code>@narduk-enterprises</code> scope resolves to <strong>GitHub Packages</strong>; use the same <code>.npmrc</code> pattern as other org packages (see repo root <code>.npmrc</code> and a <code>read:packages</code> token in CI).
    </p>
    <h2 class="text-highlighted">Subpath entries</h2>
    <p class="text-muted">The package exposes focused bundles for bundle splitting:</p>
    <ul class="text-muted">
      <li><code>{{ NPM_PACKAGE_NAME }}/line</code>, <code>/bar</code>, <code>/pie</code>, <code>/candle</code>, <code>/studies</code></li>
    </ul>
    <p class="text-muted">
      See <NuxtLink to="/product/integration">Integration</NuxtLink> for Nuxt/Vite notes.
    </p>
  </article>
</template>
