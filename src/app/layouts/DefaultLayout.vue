<template>
  <TheHeader />

  <main class="container">
    <RouterView />
  </main>

  <TheFooter />

  <ScrollToTop/>

</template>

<script setup>
import TheHeader from '@/widgets/header/ui/Header.vue'
import TheFooter from '@/widgets/footer/ui/Footer.vue'
import ScrollToTop from '@/widgets/scrollToTop/ScrollToTop.vue';

</script>