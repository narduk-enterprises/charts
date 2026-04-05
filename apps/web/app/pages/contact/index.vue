<script setup lang="ts">
import * as z from 'zod'

definePageMeta({ layout: 'marketing' })

const pageTitle = 'Contact — Narduk Charts'
const pageDescription =
  'Reach the Narduk Charts team for enterprise evaluations, integration questions, and implementation support.'

useSeo({
  title: pageTitle,
  description: pageDescription,
  ogImage: { title: pageTitle, description: pageDescription, icon: 'i-lucide-mail' },
})

useWebPageSchema({
  name: pageTitle,
  description: pageDescription,
  type: 'ContactPage',
})
useSiteBreadcrumbs([{ label: 'Contact', to: '/contact' }])

const config = useRuntimeConfig()
const salesEmail = computed(() => String(config.public.contactSalesEmail || 'enterprise@nard.uk'))
const { captureLeadStart, captureLeadSubmit, captureNav } = useSiteAnalytics()

const schema = z.object({
  organization: z.string().min(1, 'Organization required'),
  name: z.string().min(1, 'Name required'),
  email: z.string().email('Valid work email required'),
  message: z.string().min(1, 'Message required'),
})

type ContactForm = z.output<typeof schema>

const state = reactive<ContactForm>({
  organization: '',
  name: '',
  email: '',
  message: '',
})

const subject = computed(() => `Narduk Charts inquiry — ${state.organization || 'Evaluation'}`)
const body = computed(() =>
  [
    `Organization: ${state.organization}`,
    `Name: ${state.name}`,
    `Email: ${state.email}`,
    '',
    state.message,
  ]
    .map((line) => line.trimEnd())
    .join('\n'),
)
const mailtoHref = computed(
  () =>
    `mailto:${salesEmail.value}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(body.value)}`,
)

let started = false

function onFieldFocus() {
  if (started) return
  started = true
  captureLeadStart('contact')
}

async function onSubmit() {
  captureLeadSubmit('contact')

  if (import.meta.client) {
    window.location.href = mailtoHref.value
  }
}
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-2xl space-y-8">
      <div class="space-y-4 text-center">
        <UBadge color="neutral" variant="subtle" class="rounded-full">Contact</UBadge>
        <h1 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
          Start a technical conversation
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          Tell us about your stack, chart surfaces, and rollout timeline. Submit opens your mail
          client and sends the request to
          <span class="font-medium text-highlighted">{{ salesEmail }}</span
          >.
        </p>
      </div>

      <UCard class="border-default/80 bg-default/40">
        <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
          <UFormField label="Organization" name="organization">
            <UInput
              v-model="state.organization"
              autocomplete="organization"
              @focus="onFieldFocus"
            />
          </UFormField>
          <UFormField label="Name" name="name">
            <UInput v-model="state.name" autocomplete="name" @focus="onFieldFocus" />
          </UFormField>
          <UFormField label="Work email" name="email">
            <UInput v-model="state.email" type="email" autocomplete="email" @focus="onFieldFocus" />
          </UFormField>
          <UFormField label="Message" name="message">
            <UTextarea v-model="state.message" :rows="6" @focus="onFieldFocus" />
          </UFormField>
          <UButton type="submit" color="primary" block size="lg">Send via email</UButton>
        </UForm>
      </UCard>

      <div class="grid gap-4 md:grid-cols-2">
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">What to include</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Vue/Nuxt versions and whether the app is SSR, SPA, or embedded.</li>
            <li>The chart surfaces you are evaluating: OHLC, linked panes, studies, or export.</li>
            <li>Any deployment, compliance, or theming constraints that shape the decision.</li>
          </ul>
        </UCard>
        <UCard class="border-default/80 bg-default/40">
          <h2 class="text-lg font-semibold text-highlighted">Prefer self-serve first?</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            The docs and showcase remain the fastest path for technical verification before you
            reach out.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <UButton to="/docs" color="neutral" variant="outline" @click="captureNav('/docs')">
              Docs
            </UButton>
            <UButton
              to="/showcase"
              color="neutral"
              variant="ghost"
              @click="captureNav('/showcase')"
            >
              Showcase
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
