<template>

  <!-- <Loading v-if="isLoading" /> -->

  <!-- <p v-if="error">
    <i class="alert alert-warning">Error : {{ error.message }}</i>
  </p> -->

  <div class="latest-posts">

    <div class="container-fluid">

      <div class="blog-title-span">
        <span class="title">
          آخرین اخبار
        </span>
      </div>

      <div v-if="isLoading" class="row g-4">
        <div v-for="n in 8" :key="n" class="col-md-3 mb-4" >
          <NewsCardSkeleton />
        </div>
      </div>

      <div v-else-if="newsList" class="row g-4">
        <div v-for="news in newsList" :key="news.id" class="col-md-3 mb-4" style="cursor: pointer;" >
            <NewsCard :news="news" @open="id => newsStore.showNews(id)"/>
        </div>

      </div>

      <div v-else class="text-center py-4">
        <p>خبری برای نمایش وجود ندارد.</p>
        <p v-if="isError">{{ error }}</p>
      </div>

    </div>

  </div>

<NewsDetailModal />

</template>

<script setup>

import { storeToRefs } from 'pinia'
const Loading = () => import('@/shared/ui/Loading.vue')
import { useGetNews } from '@/features/news/composables/useGetNews'
import { useNewsStore } from '@/features/news/store/newsStore'
import NewsDetailModal from '@/widgets/newsDetailModal/ui/NewsDetailModal.vue'
import NewsCard from '@/features/news/widgets/NewsCard/NewsCard.vue'
import NewsCardSkeleton from '@/features/news/widgets/NewsCard/NewsCardSkeleton.vue'

const newsStore = useNewsStore()

const { selectedGroupId } = storeToRefs(newsStore)

const {
  data: newsList,
  isLoading,
  isError,
  error
} = useGetNews(selectedGroupId)

</script>