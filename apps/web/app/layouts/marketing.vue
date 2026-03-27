<template>
  <div class="min-h-screen bg-default text-default">
    <ULink
      to="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-default focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-highlighted focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-primary"
    >Skip to main content</ULink>
    <SiteHeader />
    <div
      id="main-content"
      role="main"
      tabindex="-1"
      class="scroll-mt-20 outline-none focus:outline-none"
    >
      <slot />
    </div>
    <SiteFooter />
  </div>
</template>
