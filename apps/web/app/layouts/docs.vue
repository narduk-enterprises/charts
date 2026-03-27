<template>
  <div class="min-h-screen bg-default text-default">
    <SiteHeader />
    <UContainer class="py-8 lg:py-10">
      <div class="flex gap-10 lg:gap-14">
        <DocsAside />
        <div class="min-w-0 flex-1">
          <slot />
        </div>
      </div>
    </UContainer>
    <SiteFooter />
  </div>
</template>
