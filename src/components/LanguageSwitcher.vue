<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const switchLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <div class="fixed top-4 right-4 z-50 flex gap-2">
    <button 
      @click="switchLanguage('en')" 
      class="lang-btn"
      :class="{ 'active': locale === 'en' }"
    >
      EN
    </button>
    <button 
      @click="switchLanguage('fr')" 
      class="lang-btn"
      :class="{ 'active': locale === 'fr' }"
    >
      FR
    </button>
  </div>
</template>

<style scoped>
.lang-btn {
  @apply px-3 py-1 text-sm font-medium rounded transition-colors duration-200;
  @apply bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-500;
}

.lang-btn:hover {
  @apply text-black border-gray-400;
}

.lang-btn.active {
  @apply bg-black text-white border-black;
}
</style>
