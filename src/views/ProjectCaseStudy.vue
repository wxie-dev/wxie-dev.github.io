<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SectionWrapper from '../components/SectionWrapper.vue'

type CaseStudyKey =
  | 'enterprise-crm-modernization'
  | 'microfrontend-architecture'
  | 'commerce-platform-evolution'
  | 'solendro-platform-evolution'

interface CaseStudy {
  title: string
  summary: string
  techStack: string
  duration: string
  teamSize: string
  role: string
  context: string
  keyChallenges: string[]
  architecturalDecisions: string[]
  implementation: {
    frontend: string
    backend: string
    architecture: string
    integrations: string
  }
  impact: string[]
  lessonsLearned: string[]
}

const caseStudies: Record<CaseStudyKey, CaseStudy> = {
  'enterprise-crm-modernization': {
    title: 'Enterprise CRM Modernization',
    summary: 'Refactoring a multi-tenant CRM to clarify domain boundaries and improve long-term evolvability.',
    techStack: 'Vue 3 · TypeScript · ASP.NET Core · REST APIs · SQL',
    duration: 'Ongoing (multi-year roadmap)',
    teamSize: '5–8 engineers',
    role: 'Fullstack Engineer / Architecture contributor',
    context:
      'The existing CRM served multiple business units on a shared multi-tenant platform. Years of incremental changes had blurred domain boundaries, created tightly coupled modules, and slowed down feature delivery. Modernization was required to regain development speed without disrupting production operations.',
    keyChallenges: [
      'Untangling tightly coupled legacy components while keeping the platform online.',
      'Clarifying domain ownership in a product that had grown organically over several years.',
      'Aligning frontend and backend boundaries to avoid duplication and divergence.',
      'Introducing new architecture decisions without a full rewrite or big-bang migration.',
      'Maintaining performance and stability while incrementally refactoring core areas.'
    ],
    architecturalDecisions: [
      'Introduced modular frontend slices aligned with CRM domains instead of technical layers.',
      'Defined clear contracts between Vue frontends and ASP.NET Core APIs using typed DTOs.',
      'Separated read-optimized and write-focused endpoints where it reduced complexity.',
      'Established a gradual strangler pattern to move features from legacy modules into new bounded contexts.',
      'Documented service boundaries and data ownership to reduce cross-team coupling.'
    ],
    implementation: {
      frontend:
        'Vue 3 + TypeScript with domain-oriented view modules, shared UI primitives, and stricter typing around API contracts.',
      backend:
        'ASP.NET Core services exposing REST APIs, with layered validation, application services, and persistence boundaries.',
      architecture:
        'Incremental modularization using a strangler pattern, progressively extracting capabilities into clearer bounded contexts.',
      integrations:
        'CRM integrated with authentication, reporting, and external data feeds through well-defined API gateways and message-based syncs.'
    },
    impact: [
      'Reduced regression risk by isolating changes within clearer domain modules.',
      'Improved developer productivity by making feature ownership and code locations explicit.',
      'Increased stability by aligning validation and rules between frontend and backend contracts.',
      'Created a roadmap for further modernization that can be executed in small, low-risk increments.'
    ],
    lessonsLearned: [
      'Incremental modernization works best when each step clarifies boundaries rather than adding new abstractions.',
      'Shared UI components are valuable, but shared domain models are even more critical in a multi-tenant system.',
      'Architecture decisions need to be visible and lightweight so teams can actually follow them under delivery pressure.'
    ]
  },
  'microfrontend-architecture': {
    title: 'Micro Frontend Architecture Design',
    summary: 'Designing a modular frontend landscape to enable parallel development across products and teams.',
    techStack: 'Vue 3 · TypeScript · Module Federation · Design System · CI/CD',
    duration: 'Several months of design and rollout',
    teamSize: 'Multiple product teams',
    role: 'Frontend Lead / Architecture design',
    context:
      'The organization needed to scale frontend delivery across multiple products without creating a monolithic SPA that was hard to evolve. Teams required autonomy, but the user experience still had to feel coherent and consistent.',
    keyChallenges: [
      'Allowing teams to deploy independently without breaking shared entry points.',
      'Managing shared dependencies such as design systems and routing across micro frontends.',
      'Avoiding fragmentation of UX and coding standards while enabling team autonomy.',
      'Designing a composition model that works for both authenticated and public experiences.',
      'Ensuring performance remained acceptable as more micro frontends were integrated.'
    ],
    architecturalDecisions: [
      'Defined a shell application responsible for layout, navigation, and cross-cutting concerns.',
      'Used module federation and clearly versioned contracts for loading remote Vue micro frontends.',
      'Centralized the design system and core UI primitives to keep the experience cohesive.',
      'Standardized route registration and telemetry so each micro frontend behaved consistently once mounted.',
      'Introduced clear guidelines on when to create a new micro frontend versus extending an existing one.'
    ],
    implementation: {
      frontend:
        'Vue 3 applications consuming a shared design system, with each micro frontend owning its own routing and local state.',
      backend:
        'Existing backend services remained mostly unchanged, accessed through well-defined HTTP APIs from each micro frontend.',
      architecture:
        'Shell-plus-micro-frontends model with remote modules loaded at runtime, and shared libraries pinned through federation configuration.',
      integrations:
        'Integrated with CI/CD pipelines to independently build and deploy micro frontends while validating compatibility with the shell.'
    },
    impact: [
      'Enabled teams to deliver features independently without coordinating every release.',
      'Improved UI consistency by enforcing a single design system across all micro frontends.',
      'Reduced coupling between product areas, making large-scale refactors more manageable.',
      'Created a clear path for onboarding new teams and products into the frontend ecosystem.'
    ],
    lessonsLearned: [
      'Micro frontends solve organizational scaling problems, not basic component reuse problems.',
      'A strong design system is a prerequisite for a cohesive multi-frontend experience.',
      'Operational maturity (CI/CD, monitoring, version management) is as important as the technical composition model.'
    ]
  },
  'commerce-platform-evolution': {
    title: 'Commerce Platform Extensions (WordPress / WooCommerce)',
    summary: 'Extending WordPress-based commerce platforms with custom capabilities while preserving stability.',
    techStack: 'WordPress · WooCommerce · PHP · Custom Plugins · Payments',
    duration: 'Multi-project, multi-year engagements',
    teamSize: 'Solo engineer collaborating with client teams',
    role: 'Technical lead and implementation engineer',
    context:
      'Several private clients relied on WordPress and WooCommerce for their online commerce. The base setup worked, but they needed capabilities beyond what off-the-shelf plugins provided, without rewriting their entire stack.',
    keyChallenges: [
      'Extending existing WooCommerce setups without breaking upgrades or plugin compatibility.',
      'Designing custom plugins that respected WordPress lifecycle hooks and performance constraints.',
      'Integrating multiple payment providers while keeping checkout flows robust.',
      'Optimizing perceived performance on shared or constrained hosting environments.',
      'Keeping configuration and customization maintainable for non-technical stakeholders.'
    ],
    architecturalDecisions: [
      'Isolated custom business logic inside dedicated plugins instead of modifying theme or core files.',
      'Used clear extension points and hooks provided by WooCommerce to intercept and extend behaviors.',
      'Separated configuration from code so that client teams could manage key settings from the admin UI.',
      'Introduced a lightweight layering inside plugins to separate integration code from domain rules.',
      'Defined a checklist for upgrades to validate compatibility after WooCommerce or plugin updates.'
    ],
    implementation: {
      frontend:
        'Custom theme refinements and checkout UX adjustments built on top of existing WooCommerce templates.',
      backend:
        'PHP plugins encapsulating pricing rules, fulfillment workflows, and integration logic with external services.',
      architecture:
        'Extension-oriented design that treated WooCommerce as the core engine and plugins as isolated capability modules.',
      integrations:
        'Payment gateways, third-party marketing tools, and back-office systems integrated through APIs and webhooks.'
    },
    impact: [
      'Enabled clients to evolve their commerce capabilities without migrating away from their existing platforms.',
      'Improved checkout reliability and reduced support incidents related to payment failures.',
      'Provided a clearer separation between platform configuration and custom code, simplifying future changes.',
      'Extended the useful life of existing WordPress-based platforms while keeping options open for future replatforming.'
    ],
    lessonsLearned: [
      'Treating a CMS or commerce engine as a platform, not a codebase to fork, leads to more sustainable customizations.',
      'Good boundaries around configuration, integration, and domain rules are as important in “small” systems as in large ones.',
      'Incremental extensions can deliver meaningful business value while keeping a future migration path open.'
    ]
  },
  'solendro-platform-evolution': {
    title: 'Solendro Platform Evolution',
    summary: 'Evolving a multi-market e-commerce platform across architectural generations.',
    techStack: 'Nuxt.js · LoopBack · Magento · MySQL · MongoDB · AWS OpsWorks',
    duration: 'Multi-year platform evolution (V2 → V3)',
    teamSize: 'Small cross-functional engineering team',
    role: 'Lead Developer / Fullstack Engineer',
    context:
      'Solendro operated international e-commerce platforms across multiple markets. The second-generation platform was based on Magento 1.9, with increasing customization and operational complexity. As business requirements grew, the monolithic structure limited scalability, flexibility, and long-term maintainability. A new architectural direction was required to support international expansion and faster feature delivery.',
    keyChallenges: [
      'Managing growing customization inside a Magento monolith.',
      'Supporting multiple markets with diverging business rules.',
      'Scaling frontend performance across mobile and desktop.',
      'Designing a migration path without interrupting ongoing operations.',
      'Coordinating infrastructure and deployment workflows across environments.'
    ],
    architecturalDecisions: [
      'Designed and implemented a third-generation architecture based on Nuxt.js frontend and LoopBack APIs.',
      'Separated presentation layer from business logic via explicit REST interfaces.',
      'Introduced backend services to encapsulate domain rules instead of embedding them in CMS logic.',
      'Structured the system to support market-specific configuration without duplicating core functionality.',
      'Centralized deployment and environment orchestration via AWS OpsWorks.'
    ],
    implementation: {
      frontend:
        'Nuxt.js application serving both desktop and mobile experiences, structured around reusable UI components and SEO-friendly routing.',
      backend:
        'LoopBack-based API layer exposing structured endpoints for pricing, inventory, fulfillment, and checkout logic.',
      architecture:
        'Transition from CMS-centric monolith to API-driven commerce platform, enabling clearer separation of concerns.',
      integrations:
        'Payment providers, logistics systems, marketing platforms, and reporting tools integrated through REST APIs and scheduled automation tasks.'
    },
    impact: [
      'Enabled expansion to multiple international markets under a unified architecture.',
      'Reduced operational complexity by isolating business rules inside backend services.',
      'Improved frontend performance and maintainability compared to the legacy stack.',
      'Extended the lifecycle of the platform while preparing for future architectural evolution.'
    ],
    lessonsLearned: []
  }
}

const route = useRoute()
const { t, tm } = useI18n()

const caseStudy = computed<CaseStudy | undefined>(() => {
  const slug = route.params.slug as CaseStudyKey | undefined
  if (!slug) return undefined
  if (slug === 'enterprise-crm-modernization') {
    const base = 'caseStudies.enterpriseCrm'
    const keyChallenges = (tm(`${base}.keyChallenges`) as unknown as string[]) || []
    const architecturalDecisions = (tm(`${base}.architecturalDecisions`) as unknown as string[]) || []
    const impact = (tm(`${base}.impact`) as unknown as string[]) || []
    const lessonsLearned = (tm(`${base}.lessonsLearned`) as unknown as string[]) || []
    return {
      title: t(`${base}.title`),
      summary: t(`${base}.summary`),
      techStack: t(`${base}.techStack`),
      duration: t(`${base}.duration`),
      teamSize: t(`${base}.teamSize`),
      role: t(`${base}.role`),
      context: t(`${base}.context`),
      keyChallenges,
      architecturalDecisions,
      implementation: {
        frontend: t(`${base}.implementation.frontend`),
        backend: t(`${base}.implementation.backend`),
        architecture: t(`${base}.implementation.architecture`),
        integrations: t(`${base}.implementation.integrations`)
      },
      impact,
      lessonsLearned
    }
  }
  return caseStudies[slug]
})
</script>

<template>
  <SectionWrapper class="bg-white">
    <div class="max-w-4xl mx-auto">
      <nav class="mb-8">
        <RouterLink
          :to="{ name: 'home', hash: '#projects' }"
          class="inline-flex items-center text-sm text-gray-500 hover:text-black"
        >
          <span class="mr-2">←</span>
          <span>{{ t('caseStudies.common.back') }}</span>
        </RouterLink>
      </nav>

      <article v-if="caseStudy" class="space-y-12">
        <header class="space-y-4">
          <h1 class="text-3xl md:text-4xl font-semibold text-black">
            {{ caseStudy.title }}
          </h1>
          <p class="text-lg text-gray-700">
            {{ caseStudy.summary }}
          </p>
          <p class="text-sm text-gray-500">
            {{ caseStudy.techStack }}
          </p>
          <dl class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <dt class="font-semibold text-black">{{ t('caseStudies.common.duration') }}</dt>
              <dd>{{ caseStudy.duration }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-black">{{ t('caseStudies.common.teamSize') }}</dt>
              <dd>{{ caseStudy.teamSize }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-black">{{ t('caseStudies.common.role') }}</dt>
              <dd>{{ caseStudy.role }}</dd>
            </div>
          </dl>
        </header>

        <section aria-labelledby="context-heading" class="space-y-3">
          <h2 id="context-heading" class="text-xl font-semibold text-black">
            {{ t('caseStudies.common.context') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ caseStudy.context }}
          </p>
        </section>

        <section aria-labelledby="challenges-heading" class="space-y-3">
          <h2 id="challenges-heading" class="text-xl font-semibold text-black">
            {{ t('caseStudies.common.keyChallenges') }}
          </h2>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li v-for="item in caseStudy.keyChallenges" :key="item">
              {{ item }}
            </li>
          </ul>
        </section>

        <section aria-labelledby="decisions-heading" class="space-y-3">
          <h2 id="decisions-heading" class="text-xl font-semibold text-black">
            {{ t('caseStudies.common.architecturalDecisions') }}
          </h2>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li v-for="item in caseStudy.architecturalDecisions" :key="item">
              {{ item }}
            </li>
          </ul>
        </section>

        <section aria-labelledby="implementation-heading" class="space-y-3">
          <h2 id="implementation-heading" class="text-xl font-semibold text-black">
            {{ t('caseStudies.common.technicalImplementation') }}
          </h2>
          <dl class="space-y-2 text-gray-700">
            <div>
              <dt class="font-semibold text-black">{{ t('caseStudies.common.frontend') }}</dt>
              <dd>{{ caseStudy.implementation.frontend }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-black">{{ t('caseStudies.common.backend') }}</dt>
              <dd>{{ caseStudy.implementation.backend }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-black">{{ t('caseStudies.common.architecturePattern') }}</dt>
              <dd>{{ caseStudy.implementation.architecture }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-black">{{ t('caseStudies.common.integrations') }}</dt>
              <dd>{{ caseStudy.implementation.integrations }}</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="impact-heading" class="space-y-3">
          <h2 id="impact-heading" class="text-xl font-semibold text-black">
            {{ t('caseStudies.common.impact') }}
          </h2>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li v-for="item in caseStudy.impact" :key="item">
              {{ item }}
            </li>
          </ul>
        </section>

      </article>

      <article v-else class="space-y-4">
        <h1 class="text-2xl font-semibold text-black">
          {{ t('caseStudies.common.notFoundTitle') }}
        </h1>
        <p class="text-gray-700">
          {{ t('caseStudies.common.notFoundText') }}
        </p>
      </article>
    </div>
  </SectionWrapper>
</template>
