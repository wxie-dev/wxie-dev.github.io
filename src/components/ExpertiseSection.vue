<script setup lang="ts">
import SectionWrapper from './SectionWrapper.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const expertises = computed(() => [
  {
    title: t('expertise.frontend.title'),
    description: t('expertise.frontend.description'),
    technologies: ['Vue 3', 'Nuxt.js', 'TypeScript', 'Micro Frontends', 'Vuetify']
  },
  {
    title: t('expertise.backend.title'),
    description: t('expertise.backend.description'),
    technologies: ['ASP.NET Core', 'C#', 'REST APIs', 'LoopBack', 'Laravel', 'SQL Server']
  },
  {
    title: t('expertise.ecommerce.title'),
    description: t('expertise.ecommerce.description'),
    technologies: ['Magento', 'AWS', 'Redis', 'Microservices']
  },
  {
    title: t('expertise.devops.title'),
    description: t('expertise.devops.description'),
    technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'AWS OpsWorks']
  }
])
</script>

<template>
  <SectionWrapper id="expertise" class="bg-white">
    <h2 class="section-title">
      {{ t('expertise.title') }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div v-for="(expertise, index) in expertises" :key="index" class="p-8 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-semibold mb-3 text-black">{{ expertise.title }}</h3>
        <p class="text-gray-500 leading-relaxed mb-6">{{ expertise.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in expertise.technologies" :key="tech" class="text-xs px-2 py-1 bg-gray-100 rounded font-medium text-black">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
