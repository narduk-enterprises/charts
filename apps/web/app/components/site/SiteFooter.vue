<script setup lang="ts">
import { LIBRARY_GITHUB_HREF, SITE_REPO_HREF, capabilityNav, chartFamilies, docsNav } from '~/data/site'

const config = useRuntimeConfig()
const appName = config.public.appName || 'Narduk Charts'
const { captureGithubOutbound, captureNav } = useSiteAnalytics()
const year = new Date().getFullYear()
</script>

<template>
  <div class="border-t border-default/60 bg-default/40" role="contentinfo">
    <UContainer class="py-12">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-3">
          <div class="flex items-center gap-2 font-semibold text-highlighted">
            <UIcon name="i-lucide-activity" class="h-5 w-5 text-primary" />
            {{ appName }}
          </div>
          <p class="text-sm leading-relaxed text-muted">
            SVG charting for Vue 3 trading interfaces: precise axes, synced panes, and explicit export surfaces.
          </p>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Charts</p>
          <ul class="space-y-2 text-sm">
            <li v-for="c in chartFamilies" :key="c.id">
              <NuxtLink
                :to="c.route"
                class="text-muted hover:text-highlighted"
                @click="captureNav(c.route)"
              >
                {{ c.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Capabilities</p>
          <ul class="space-y-2 text-sm">
            <li v-for="p in capabilityNav" :key="p.to">
              <NuxtLink
                :to="p.to"
                class="text-muted hover:text-highlighted"
                @click="captureNav(p.to)"
              >
                {{ p.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Docs &amp; code</p>
          <ul class="space-y-2 text-sm">
            <li v-for="p in docsNav.slice(0, 8)" :key="p.to">
              <NuxtLink
                :to="p.to"
                class="text-muted hover:text-highlighted"
                @click="captureNav(p.to)"
              >
                {{ p.label }}
              </NuxtLink>
            </li>
            <li>
              <ULink
                :to="LIBRARY_GITHUB_HREF"
                target="_blank"
                class="text-muted hover:text-highlighted"
                @click="captureGithubOutbound('library')"
              >
                GitHub library
              </ULink>
            </li>
            <li>
              <ULink
                :to="SITE_REPO_HREF"
                target="_blank"
                class="text-muted hover:text-highlighted"
                @click="captureGithubOutbound('site')"
              >
                This site (source)
              </ULink>
            </li>
          </ul>
        </div>
      </div>
      <USeparator class="my-8" />
      <p class="text-center text-xs text-muted">
        © {{ year }} {{ appName }}. MIT-licensed charting components.
      </p>
    </UContainer>
  </div>
</template>
