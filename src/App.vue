<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

<template>
  <main class="w-full min-h-screen flex flex-col font-sans text-black bg-white">
    <LanguageSwitcher />
    <RouterView class="flex-1" />
    <Footer />
  </main>
  </template>
