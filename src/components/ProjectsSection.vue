<script setup lang="ts">
import SectionWrapper from './SectionWrapper.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = computed(() => [
  {
    title: t('projects.solendroPlatform.title'),
    tech: t('projects.solendroPlatform.tech'),
    summary1: t('projects.solendroPlatform.summary1'),
    summary2: t('projects.solendroPlatform.summary2'),
    impact: t('projects.solendroPlatform.impact')
  },
  {
    title: t('projects.dataAnalytics.title'),
    tech: t('projects.dataAnalytics.tech'),
    summary1: t('projects.dataAnalytics.summary1'),
    summary2: t('projects.dataAnalytics.summary2'),
    impact: t('projects.dataAnalytics.impact')
  },
  {
    title: t('projects.enterpriseCrm.title'),
    tech: t('projects.enterpriseCrm.tech'),
    summary1: t('projects.enterpriseCrm.summary1'),
    summary2: t('projects.enterpriseCrm.summary2'),
    impact: t('projects.enterpriseCrm.impact')
  },
  {
    title: t('projects.microFrontends.title'),
    tech: t('projects.microFrontends.tech'),
    summary1: t('projects.microFrontends.summary1'),
    summary2: t('projects.microFrontends.summary2'),
    impact: t('projects.microFrontends.impact')
  }
])
</script>

<template>
  <SectionWrapper id="projects" class="bg-gray-50">
    <h2 class="section-title">
      {{ t('projects.title') }}
    </h2>
    <div class="max-w-4xl mx-auto space-y-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      >
        <div class="flex items-start gap-4 mb-4">
          <div>
            <h3 class="text-lg md:text-xl font-bold text-black mb-1">
              {{ project.title }}
            </h3>
            <p class="text-sm md:text-base text-gray-500">
              {{ project.tech }}
            </p>
          </div>
        </div>
        <div class="space-y-3 text-base text-black leading-relaxed mb-4">
          <p>{{ project.summary1 }}</p>
          <p>{{ project.summary2 }}</p>
        </div>
        <div class="text-sm text-gray-500 pt-4 border-t border-gray-100">
          <span class="font-semibold text-black">{{ t('projects.impact') }}:</span>
          {{ project.impact }}
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
