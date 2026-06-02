<template>

<!-- <Loading v-if="isLoadingMostViewedNews"/> -->

<div class="most-views">

   <span class="title">خبرهای پربازدید</span>


  <div v-if="isLoadingMostViewedNews" class="row">
        <div v-for="n in 3" :key="n" class="col-lg-4 col-md-6 mb-4" >
          <NewsCardSkeleton />
        </div>
      </div>
      
   <div v-else-if="data" class="row">

      <NewsCard :news="data.mostVisited" @open="newsStore.showNews(data.mostVisited.id)"/>
      
      <div class="col-lg-4 col-md-6 mb-4" v-for="mostViewedNew in data.mostViewedNews" 
      :key="mostViewedNew.id" @click="newsStore.showNews(mostViewedNew.id)">

      <NewsCard :news="mostViewedNew" @open="newsStore.showNews(mostViewedNew.id)"/>

</div>

   </div>

   <div v-else class="text-center py-4">
        <p>خبری برای نمایش وجود ندارد.</p>
        <p v-if="isErrorMostViewedNews">{{ mostViewedNewsError }}</p>
      </div>
</div>

<NewsDetailModal />

</template>

<script setup>

import { useNewsStore } from '@/features/news/store/newsStore.js';
import { useMostViewsNews } from '@/features/news/composables/useMostViewsNews.js';
import { storeToRefs } from 'pinia';
import NewsDetailModal from '@/widgets/newsDetailModal/ui/NewsDetailModal.vue';
import NewsCard from '@/features/news/widgets/NewsCard/NewsCard.vue';
import NewsCardSkeleton from '@/features/news/widgets/NewsCard/NewsCardSkeleton.vue';

const newsStore = useNewsStore();

const {selectedGroupId} = storeToRefs(newsStore)

const { 
  data, 
  isLoading: isLoadingMostViewedNews,
  isError: isErrorMostViewedNews,
  error: mostViewedNewsError,
} = useMostViewsNews(selectedGroupId)

</script>

<style scoped src="../styles/mostViews.css"></style>