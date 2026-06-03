<template>
  <article class="news-card" @click="emit('open', news.id)">

    <div class="news-card__image">

      <img
        v-lazy="news.thumbnail"
        :alt="news.title"/>

      <span class="news-card__category">
        {{ news.newsGroupTitle || 'بدون دسته‌بندی' }}
      </span>

    </div>

    <div class="news-card__body">

      <h3 class="news-card__title">
        {{ news.title }}
      </h3>

      <p class="news-card__description">
        {{ news.description }}
      </p>

      <div class="news-card__footer">

        <div class="news-card__meta">
          <i class="fa fa-clock-o"></i>
          <span>{{ news.createdAtLocal }}</span>
        </div>

        <div class="news-card__meta">
          <i class="fa fa-comment-o"></i>
          <span>{{ news.commentsCount}}</span>
        </div>

      </div>

    </div>

  </article>
</template>

<script setup>

defineProps({
  news: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open'])
</script>

<style scoped src="../../ui/styles/newsCard.css"></style>