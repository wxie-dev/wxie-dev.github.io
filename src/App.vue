<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExpertiseSection from './components/ExpertiseSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

<template>
  <main class="w-full flex flex-col font-sans text-black bg-white">
    <LanguageSwitcher />
    <HeroSection id="hero" />
    <AboutSection id="about" />
    <ExpertiseSection id="expertise" />
    <ProjectsSection id="projects" />
    <ExperienceSection id="experience" />
    <ContactSection id="contact" />
    <Footer />
  </main>
</template>
