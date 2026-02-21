<script setup lang="ts">
import SectionWrapper from './SectionWrapper.vue'

const scrollToProjects = () => {
  const element = document.getElementById('projects');
  if (element) element.scrollIntoView({ behavior: 'smooth' });
}

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) element.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <SectionWrapper id="hero" class="min-h-[90vh] flex items-center justify-center">
    <div class="max-w-4xl text-left">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight">
        {{ $t('hero.name') }}
      </h1>
      <h2 class="text-xl md:text-3xl font-medium text-gray-500 mb-8">
        {{ $t('hero.title') }}
      </h2>
      <p class="text-lg md:text-xl leading-relaxed max-w-2xl mb-12 text-gray-800">
        {{ $t('hero.positioning') }}
      </p>
      
      <div class="flex gap-6">
        <button @click="scrollToProjects" class="px-6 py-3 bg-black text-white border border-black rounded hover:bg-white hover:text-black transition-colors duration-200 font-medium">
          {{ $t('nav.projects') }}
        </button>
        <button @click="scrollToContact" class="px-6 py-3 bg-transparent text-black border border-gray-400 rounded hover:border-black transition-colors duration-200 font-medium">
          {{ $t('nav.contact') }}
        </button>
      </div>
    </div>
  </SectionWrapper>
</template>
