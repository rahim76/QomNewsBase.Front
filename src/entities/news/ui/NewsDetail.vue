<template>

  <article class="news-content" @click="emit('open', news.id)">

    <img
      class="news-content__image"
      :src="news.thumbnail || defaultImage"
      :alt="news.title"
    >

    <div class="news-content__body">

      <span class="news-content__category">
        {{ news.newsGroupTitle }}
      </span>

      <h1 class="news-content__title">
        {{ news.title }}
      </h1>

      <div class="news-content__meta">

        <span>
          <i class="fa fa-clock-o"></i>
          {{ news.createdAtLocal }}
        </span>

        <span>
          <i class="fa fa-comment-o"></i>
          {{ news.commentCount ?? 0 }}
        </span>

      </div>

      <div class="news-content__text" v-html="news.body || news.description"/>

    </div>

  </article>

</template>

<script setup>
import defaultImage from '../../../../public/img/1733753707Capture.png'
import '../styles/newsDetail.css'

defineProps({
  news: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open']);

</script>