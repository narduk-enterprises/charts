<script setup lang="ts">
import { LIBRARY_GITHUB_HREF, capabilityNav, docsNav, productNav, showcaseNav } from '~/data/site'

const config = useRuntimeConfig()
const appName = config.public.appName || 'Narduk Charts'
const { captureNav, captureGithubOutbound, captureCta } = useSiteAnalytics()

const colorMode = useColorMode()
const mobileOpen = ref(false)

function cycleColorMode() {
  const order = ['light', 'dark', 'system'] as const
  const i = order.indexOf(colorMode.preference as (typeof order)[number])
  colorMode.preference = order[(i + 1) % order.length] ?? 'system'
}

function nav(to: string) {
  captureNav(to)
  mobileOpen.value = false
}

function mobileGetStarted() {
  captureCta('mobile_get_started')
  mobileOpen.value = false
}

function mobileContact() {
  captureCta('mobile_contact')
  mobileOpen.value = false
}
</script>

<template>
  <div
    class="sticky top-0 z-50 border-b border-default/60 bg-default/80 backdrop-blur-md"
    role="banner"
  >
    <UContainer class="flex h-14 items-center justify-between gap-3 sm:h-16">
      <div class="flex min-w-0 items-center gap-4 lg:gap-8">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-semibold tracking-tight text-highlighted"
          @click="captureNav('/')"
        >
          <SiteLogoMark class="h-9 w-9 shrink-0" />
          <span class="truncate">{{ appName }}</span>
        </NuxtLink>

        <div class="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Primary">
          <UPopover mode="hover" :open-delay="0" :close-delay="80">
            <UButton color="neutral" variant="ghost" trailing-icon="i-lucide-chevron-down">
              Product
            </UButton>
            <template #content>
              <div class="flex w-72 flex-col gap-0.5 p-2">
                <UButton
                  v-for="p in productNav"
                  :key="p.to"
                  :to="p.to"
                  color="neutral"
                  variant="ghost"
                  class="h-auto justify-start whitespace-normal py-2"
                  @click="captureNav(p.to)"
                >
                  <div class="text-left">
                    <div class="text-sm font-medium">{{ p.label }}</div>
                    <div v-if="p.description" class="text-xs text-muted">{{ p.description }}</div>
                  </div>
                </UButton>
              </div>
            </template>
          </UPopover>

          <UPopover mode="hover" :open-delay="0" :close-delay="80">
            <UButton color="neutral" variant="ghost" trailing-icon="i-lucide-chevron-down">
              Showcase
            </UButton>
            <template #content>
              <div class="flex max-h-80 w-64 flex-col gap-0.5 overflow-y-auto p-2">
                <UButton
                  v-for="p in [...showcaseNav, ...capabilityNav]"
                  :key="p.to"
                  :to="p.to"
                  color="neutral"
                  variant="ghost"
                  class="justify-start"
                  @click="captureNav(p.to)"
                >
                  {{ p.label }}
                </UButton>
              </div>
            </template>
          </UPopover>

          <UPopover mode="hover" :open-delay="0" :close-delay="80">
            <UButton color="neutral" variant="ghost" trailing-icon="i-lucide-chevron-down">
              Docs
            </UButton>
            <template #content>
              <div class="flex max-h-80 w-60 flex-col gap-0.5 overflow-y-auto p-2">
                <UButton
                  v-for="p in docsNav"
                  :key="p.to"
                  :to="p.to"
                  color="neutral"
                  variant="ghost"
                  class="justify-start"
                  @click="captureNav(p.to)"
                >
                  {{ p.label }}
                </UButton>
              </div>
            </template>
          </UPopover>

          <UButton
            to="/product/enterprise"
            color="neutral"
            variant="ghost"
            @click="captureNav('/product/enterprise')"
          >
            Enterprise
          </UButton>
        </div>
      </div>

      <div class="flex items-center gap-1.5 sm:gap-2">
        <UButton
          color="neutral"
          variant="ghost"
          square
          :icon="
            colorMode.preference === 'dark'
              ? 'i-lucide-moon'
              : colorMode.preference === 'light'
                ? 'i-lucide-sun'
                : 'i-lucide-monitor'
          "
          :aria-label="`Color mode: ${colorMode.preference}`"
          @click="cycleColorMode"
        />

        <UButton
          color="neutral"
          variant="ghost"
          class="hidden sm:inline-flex"
          icon="i-lucide-github"
          :to="LIBRARY_GITHUB_HREF"
          target="_blank"
          external
          @click="captureGithubOutbound('library')"
        >
          GitHub
        </UButton>

        <UButton
          to="/contact"
          color="neutral"
          variant="outline"
          class="hidden sm:inline-flex"
          @click="captureCta('header_contact')"
        >
          Contact
        </UButton>

        <UButton
          to="/docs/quickstart"
          color="primary"
          size="sm"
          class="hidden sm:inline-flex"
          @click="captureCta('header_get_started')"
        >
          Get started
        </UButton>

        <UButton
          class="lg:hidden"
          color="neutral"
          variant="ghost"
          square
          icon="i-lucide-menu"
          aria-label="Open menu"
          @click="mobileOpen = true"
        />
      </div>
    </UContainer>

    <USlideover v-model:open="mobileOpen" side="right" class="lg:hidden">
      <div class="flex h-full flex-col gap-4 p-4">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-highlighted">Menu</span>
          <UButton
            square
            variant="ghost"
            color="neutral"
            icon="i-lucide-x"
            aria-label="Close"
            @click="mobileOpen = false"
          />
        </div>
        <div class="flex flex-col gap-6 overflow-y-auto">
          <div>
            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Product</p>
            <div class="flex flex-col gap-1">
              <UButton
                v-for="p in productNav"
                :key="p.to"
                :to="p.to"
                variant="ghost"
                color="neutral"
                class="justify-start"
                @click="nav(p.to)"
              >
                {{ p.label }}
              </UButton>
            </div>
          </div>
          <div>
            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Showcase</p>
            <div class="flex flex-col gap-1">
              <UButton
                v-for="p in [...showcaseNav, ...capabilityNav]"
                :key="p.to"
                :to="p.to"
                variant="ghost"
                color="neutral"
                class="justify-start"
                @click="nav(p.to)"
              >
                {{ p.label }}
              </UButton>
            </div>
          </div>
          <div>
            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Docs</p>
            <div class="flex flex-col gap-1">
              <UButton
                v-for="p in docsNav"
                :key="p.to"
                :to="p.to"
                variant="ghost"
                color="neutral"
                class="justify-start"
                @click="nav(p.to)"
              >
                {{ p.label }}
              </UButton>
            </div>
          </div>
          <UButton
            :to="LIBRARY_GITHUB_HREF"
            target="_blank"
            external
            variant="outline"
            color="neutral"
            icon="i-lucide-github"
            @click="captureGithubOutbound('library')"
          >
            Library on GitHub
          </UButton>
          <UButton to="/contact" color="neutral" variant="outline" @click="mobileContact">
            Contact
          </UButton>
          <UButton to="/docs/quickstart" color="primary" @click="mobileGetStarted">
            Get started
          </UButton>
        </div>
      </div>
    </USlideover>
  </div>
</template>
