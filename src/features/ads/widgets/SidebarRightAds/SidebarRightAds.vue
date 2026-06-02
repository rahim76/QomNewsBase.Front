<template>
  <div class="sidebar-ads">
    <div v-if="isLoading">در حال بارگذاری...</div>
    <div v-else-if="isError">{{ error.message }}</div>
    <div v-else>
      <div
        v-for="ad in ads"
        :key="ad.id"
        class="ad-card"
      >
        <a :href="ad.targetUrl" target="_blank">
          <img :src="ad.thumbnail" :alt="ad.title" />
          <p class="ad-title">{{ ad.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSidebarRightAds } from '../../composables/useSidebarRightAds';

const { data: ads, isLoading, isError, error } = useSidebarRightAds()
</script>