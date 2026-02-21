<script setup lang="ts">
import SectionWrapper from './SectionWrapper.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = 'wxie.dev@gmail.com'
const linkedinLink = 'https://www.linkedin.com/in/xie-wei-a7aa357b/'
</script>

<template>
  <SectionWrapper id="contact" class="bg-black text-white">
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-12">
        {{ t('contact.title') }}
      </h2>
      <div class="flex flex-col items-center gap-8">
        <div class="space-y-2">
          <div class="text-xs uppercase tracking-widest text-gray-400">
            {{ t('contact.emailLabel') }}
          </div>
          <a
            :href="`mailto:${email}`"
            class="text-xl md:text-2xl font-medium border-b border-transparent hover:border-white transition-all duration-200"
          >
            {{ email }}
          </a>
        </div>
        <div class="space-y-2">
          <div class="text-xs uppercase tracking-widest text-gray-400">
            {{ t('contact.linkedinLabel') }}
          </div>
          <a
            :href="linkedinLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200"
          >
            linkedin.com/in/xie-wei-a7aa357b
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
