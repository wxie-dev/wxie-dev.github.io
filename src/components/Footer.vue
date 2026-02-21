<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 text-center bg-black text-gray-500 text-sm border-t border-white/10">
    <div class="container mx-auto px-4">
      <p>
        {{ t('footer.copyright', { year: currentYear }) }}
      </p>
    </div>
  </footer>
</template>
