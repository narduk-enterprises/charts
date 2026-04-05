<script setup lang="ts">
import {
  LIBRARY_CHANGELOG_HREF,
  LIBRARY_GITHUB_HREF,
  docsNav,
  legalNav,
  productNav,
  SITE_REPO_HREF,
  supportNav,
  useCaseNav,
} from '~/data/site'

const config = useRuntimeConfig()
const appName = config.public.appName || 'Narduk Charts'
const { captureCta, captureGithubOutbound, captureNav } = useSiteAnalytics()
const year = new Date().getFullYear()
const pricingNav = supportNav.filter((item) => item.to === '/pricing')
const productFooterNav = [...productNav, ...pricingNav]
const supportFooterNav = supportNav.filter((item) => item.to !== '/pricing')
const docsFooterNav = [...docsNav.slice(0, 4), ...legalNav]
</script>

<template>
  <div class="border-t border-default/60 bg-default/40" role="contentinfo">
    <UContainer class="py-12">
      <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
        <div class="space-y-3">
          <div class="flex items-center gap-2 font-semibold text-highlighted">
            <SiteLogoMark class="h-9 w-9 shrink-0" />
            {{ appName }}
          </div>
          <p class="text-sm leading-relaxed text-muted">
            SVG charting for Vue 3 trading interfaces: precise axes, synced panes, and explicit
            export surfaces shaped for brokerage and desk software.
          </p>
          <UButton to="/contact" color="primary" size="sm" @click="captureCta('footer_contact')">
            Contact sales
          </UButton>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Product</p>
          <ul class="space-y-2 text-sm">
            <li v-for="p in productFooterNav" :key="p.to">
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
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Use cases</p>
          <ul class="space-y-2 text-sm">
            <li v-for="p in useCaseNav" :key="p.to">
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
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Support</p>
          <ul class="space-y-2 text-sm">
            <li v-for="p in supportFooterNav" :key="p.to">
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
                :to="LIBRARY_CHANGELOG_HREF"
                target="_blank"
                class="text-muted hover:text-highlighted"
                @click="captureGithubOutbound('library')"
              >
                Library changelog
              </ULink>
            </li>
          </ul>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
            Docs, code &amp; legal
          </p>
          <ul class="space-y-2 text-sm">
            <li v-for="p in docsFooterNav" :key="p.to">
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
