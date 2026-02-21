<script setup lang="ts">
interface Props {
  id?: string;
  className?: string;
}

defineProps<Props>()
</script>

<template>
  <section :id="id" :class="['py-20 md:py-32 w-full', className]">
    <div class="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
      <slot />
    </div>
  </section>
</template>
