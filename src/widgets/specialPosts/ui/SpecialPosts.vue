<template>

  <!-- <Loading v-if="isLoading" /> -->
  
   <!-- <p v-if="error">
    <i class="alert alert-warning">Error : {{ error.message }}</i>
  </p> -->

  <div class="latest-comments">

    <div class="title">
      <span>آخرین نظرات</span>
      <span>  </span>
    </div>

    <LatestCommentsSkeleton v-if="isLoading" />

    <div v-else-if="!!comments" class="comment-list">

      <div class="comment-item" v-for="item in comments ?? []" :key="item.id">

    <div class="top">

        <a href="#" class="news-title">
            {{ item.newsTitle }}
        </a>

        <span class="date">
            <i class="fa fa-calendar-o"></i>
            {{ item.createdAtLocal }}
        </span>

    </div>

    <p class="comment-text">
        {{ item.commentBody }}
    </p>

    <div class="bottom">

        <span class="user">
            <i class="fa fa-user-o"></i>
            {{ 'کاربر' }}
        </span>

        <span @click="newsStore.showNews(item.newsId)" class="read-more">
            مشاهده خبر
            <i class="fa fa-angle-left"></i>
        </span>

    </div>

</div>

    </div>

    <div v-else class="text-center py-4">
        <p>نظری برای نمایش وجود ندارد.</p>
        <p v-if="isError">{{ error }}</p>
      </div>


  </div>

</template>

<script setup>

import { useCommentStore } from '@/features/comment/store/commentStore.js';
import { useGetLastCommentsQuery } from '@/features/comment/composables/useGetLastCommentsQuery.js';
import { storeToRefs } from 'pinia';
// import Loading from '@/shared/ui/Loading.vue';
import LatestCommentsSkeleton from './SpecialPostsSkeleton.vue'
import { useNewsStore } from '@/features/news/store/newsStore.js';

const commentStore = useCommentStore()
const newsStore = useNewsStore()
const {takeCommensCount} = storeToRefs(commentStore)

const {
  data: comments,
  isLoading,
  isError,
  error,
} = useGetLastCommentsQuery(takeCommensCount);

</script>
<style scoped src="../styles/specialPosts.css"></style>