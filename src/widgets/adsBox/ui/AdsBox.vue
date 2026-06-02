<template>
  <div class="ads-box">
    <span class="title">تبلیغات</span><br />

    <swiper
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      class="ads-swiper"
    >
      <swiper-slide v-for="(ad, index) in 3" :key="index">
        <figure>
          <span class="ad-badge">تبلیغات</span>
          <img src="../../../shared//images/unnamed.jpg" alt="" />
        </figure>
      </swiper-slide>

      <!-- Optional navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const ads = [
  { img: '../../../shared//images/unnamed.jpg' },
  { img: '../../../shared//images/unnamed.jpg' },
  { img: '../../../shared//images/unnamed.jpg' },
];
</script>

<style scoped src="../styles/adsBox.css"></style>