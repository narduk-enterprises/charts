<template>
  <div class="min-h-screen bg-default text-default">
    <ULink
      to="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-default focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-highlighted focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-primary"
    >Skip to main content</ULink>
    <SiteHeader />
    <UContainer class="py-8 lg:py-10">
      <div class="flex gap-10 lg:gap-14">
        <DocsAside />
        <div
          id="main-content"
          class="min-w-0 flex-1 scroll-mt-20 outline-none focus:outline-none"
          tabindex="-1"
          role="main"
        >
          <slot />
        </div>
      </div>
    </UContainer>
    <SiteFooter />
  </div>
</template>
