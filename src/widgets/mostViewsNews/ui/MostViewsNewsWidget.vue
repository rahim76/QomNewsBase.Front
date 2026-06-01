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

import { useNewsStore } from '@/entities/news/model/newsStore.js';
import Loading from '@/shared/ui/Loading.vue';
import '../styles/mostViews.css'
import { useMostViewsNews } from '@/entities/news/model/useMostViewsNews.js';
import { storeToRefs } from 'pinia';
import NewsDetailModal from '@/widgets/newsDetailModal/ui/NewsDetailModal.vue';
import NewsCard from '@/entities/news/ui/NewsCard.vue';
import NewsCardSkeleton from '@/entities/news/ui/NewsCardSkeleton.vue';

const newsStore = useNewsStore();

const {selectedGroupId} = storeToRefs(newsStore)

const { 
  data, 
  isLoading: isLoadingMostViewedNews,
  isError: isErrorMostViewedNews,
  error: mostViewedNewsError,
} = useMostViewsNews(selectedGroupId)

</script>