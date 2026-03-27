<script setup lang="ts">
import { apiDocPages } from '~/data/api-docs'

definePageMeta({ layout: 'docs' })

const route = useRoute()
const slug = String(route.params.slug)

if (!apiDocPages[slug]) {
  throw createError({ statusCode: 404, statusMessage: 'API topic not found' })
}

const doc = apiDocPages[slug]

const pageTitle = `${doc.title} — Narduk Charts`
const pageDescription = doc.summary

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: {
    title: pageTitle,
    description: pageDescription,
  },
})
useWebPageSchema({
  name: pageTitle,
  description: pageDescription,
})

const { captureApiView } = useSiteAnalytics()
onMounted(() => captureApiView(slug))
</script>

<template>
  <article class="max-w-none">
    <UBreadcrumb
      class="mb-6"
      :items="[
        { label: 'Docs', to: '/docs' },
        { label: 'API reference', to: '/docs/api' },
        { label: doc.title, to: route.path },
      ]"
    />

    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">
      {{ doc.title }}
    </h1>
    <p class="mt-3 text-base leading-relaxed text-muted">
      {{ doc.summary }}
    </p>

    <div v-if="doc.importExamples?.length" class="mt-6 space-y-2">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-muted">Imports</h2>
      <CodeBlock
        v-for="(line, i) in doc.importExamples"
        :key="i"
        :code="line"
        :context="`api-${slug}-import-${String(i)}`"
      />
    </div>

    <div v-if="doc.props?.length" class="mt-8">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Props</h2>
      <div class="divide-y divide-default/60 overflow-hidden rounded-lg border border-default/70">
        <div
          v-for="p in doc.props"
          :key="p.name"
          class="grid gap-2 bg-muted/10 px-3 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,0.6fr)_minmax(0,1.2fr)] sm:items-start"
        >
          <span class="font-mono text-xs text-primary">{{ p.name }}</span>
          <span class="font-mono text-xs text-muted">{{ p.type }}</span>
          <span class="font-mono text-xs text-muted">{{ p.default ?? '—' }}</span>
          <span class="text-muted">{{ p.description }}</span>
        </div>
      </div>
    </div>

    <div v-if="doc.models?.length" class="mt-8">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">v-model</h2>
      <ul class="space-y-2 text-sm text-muted">
        <li v-for="m in doc.models" :key="m.name">
          <code class="text-primary">{{ m.name }}</code>
          —
          <code class="text-xs">{{ m.type }}</code>
          — {{ m.description }}
        </li>
      </ul>
    </div>

    <div v-if="doc.events?.length" class="mt-8">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Events</h2>
      <ul class="space-y-2 text-sm text-muted">
        <li v-for="e in doc.events" :key="e.name">
          <code class="text-primary">{{ e.name }}</code>
          <span class="font-mono text-xs">({{ e.payload }})</span>
          — {{ e.description }}
        </li>
      </ul>
    </div>

    <div v-if="doc.slots?.length" class="mt-8">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Slots</h2>
      <ul class="space-y-2 text-sm text-muted">
        <li v-for="s in doc.slots" :key="s.name">
          <code class="text-primary">{{ s.name }}</code>
          — {{ s.description }}
        </li>
      </ul>
    </div>

    <div
      v-if="doc.notes?.length"
      class="mt-8 rounded-lg border border-warning/30 bg-warning/5 p-4 text-sm text-muted"
    >
      <p class="font-semibold text-highlighted">Notes</p>
      <ul class="mt-2 list-disc space-y-1 pl-5">
        <li v-for="(n, i) in doc.notes" :key="i">{{ n }}</li>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Example</h2>
      <CodeBlock :code="doc.example" :context="`api-${slug}-example`" />
    </div>

    <div v-if="doc.relatedRoutes.length" class="mt-10">
      <h2 class="mb-3 text-lg font-semibold text-highlighted">Related</h2>
      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="r in doc.relatedRoutes"
          :key="r.to"
          :to="r.to"
          color="neutral"
          variant="soft"
          size="sm"
        >
          {{ r.label }}
        </UButton>
      </div>
    </div>
  </article>
</template>
