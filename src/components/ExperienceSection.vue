<script setup lang="ts">
import SectionWrapper from './SectionWrapper.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const experiences = computed(() => [
  {
    company: t('experience.eudonet.company'),
    role: t('experience.eudonet.role'),
    period: t('experience.eudonet.period'),
    location: t('experience.eudonet.location'),
    description: t('experience.eudonet.description')
  },
  {
    company: t('experience.solendro.company'),
    role: t('experience.solendro.role'),
    period: t('experience.solendro.period'),
    location: t('experience.solendro.location'),
    description: t('experience.solendro.description')
  }
])
</script>

<template>
  <SectionWrapper id="experience" class="bg-white">
    <div class="max-w-3xl mx-auto">
      <h2 class="section-title">
        {{ t('experience.title') }}
      </h2>
      <div class="relative pl-8 border-l-2 border-gray-100 space-y-12">
        <div v-for="(exp, index) in experiences" :key="index" class="relative">
          <div class="absolute -left-[37px] top-1.5 w-2.5 h-2.5 bg-black rounded-full border-2 border-white ring-2 ring-gray-100"></div>
          <div>
            <h3 class="text-xl font-bold text-black mb-1">{{ exp.role }}</h3>
            <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-gray-500 mb-4 text-base">
              <span class="font-medium">{{ exp.company }}</span>
              <span class="hidden md:inline text-gray-300">|</span>
              <span>{{ exp.period }}</span>
            </div>
            <p class="text-black leading-relaxed">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
