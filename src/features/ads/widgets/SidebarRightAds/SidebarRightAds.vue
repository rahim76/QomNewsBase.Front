<template>
  <div class="ads-box">
    <span class="title">تبلیغات</span><br />

    <swiper v-if="ads.length > 0"
      :slides-per-view="1"
      :space-between="20"
      :loop="ads.length  > 3"
      :autoplay="{ delay: 3000 }"
      class="ads-swiper">

      <swiper-slide v-for="ad in ads" :key="ad.id">
        <a :href="ad.targetUrl" target="_blank">

          <figure>
          <span class="ad-badge">تبلیغات</span>
          <img :src="ad.thumbnail" alt="" />
        </figure>

        </a>
      </swiper-slide>

      <!-- Optional navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </swiper>

    <div v-else>
    <span>تبلیغی برای نمایش وجود ندارد.</span>
  </div>
  
  </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useSidebarRightAds } from '../../composables/useSidebarRightAds';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const { data: ads, isLoading, isError, error } = useSidebarRightAds()



</script>

<style scoped src="../../ui/styles/sidebarRightAds.css"></style>