<script setup lang="ts">
import SectionWrapper from './SectionWrapper.vue'
</script>

<template>
  <SectionWrapper id="about" class="bg-gray-50">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-sm uppercase tracking-widest text-gray-500 mb-8 font-semibold">
        {{ $t('about.title') }}
      </h2>
      <div class="prose prose-lg md:prose-xl text-black">
        <p class="whitespace-pre-line leading-relaxed">
          {{ $t('about.text') }}
        </p>
      </div>
    </div>
  </SectionWrapper>
</template>
