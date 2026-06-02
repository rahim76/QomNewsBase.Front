<template>

  <div class="category-sidebar">

    <div class="sidebar-header">
      <i class="fa fa-folder-open"></i>
      <span>دسته‌بندی مطالب</span>
    </div>
    
    <CategorySidebarSkeleton v-if="isLoadingCategories" />

    <ul v-else-if="!!categories" class="category-list">
      <li v-for="group in categories"
        :key="group.id"
        v-show="group.id > 0"
        @click.prevent="selectGroup(group.id)"
        class="category-item">
        
        <span class="category-title">
          {{ group.title }}
        </span>

        <span class="category-badge">
          {{ group.newsCount }}
        </span>
      </li>
    </ul>

    <div v-else class="text-center py-4">
        <p>مطلبی برای نمایش وجود ندارد.</p>
        <p v-if="isError">{{ error?.message }}</p>
      </div>

  </div>
</template>

<script setup>

import CategorySidebarSkeleton from './CategoryContentSkeleton.vue'
import '../styles/categoryContent.css'
import { useNewsFilter } from '@/features/news/composables/useNewsFilter.js';
import { useGetNewsGroups } from '@/features/newsGroup/composables/useGetNewsGroups.js';

const { selectGroup } = useNewsFilter()

const {
  data: categories,
  isLoading: isLoadingCategories,
  isError,
  error
} = useGetNewsGroups()

</script>
