<template>
    <!-- <Loading v-if="isLoadingCategories" /> -->

    <div class="news-navbar">

        <nav class="news-menu">

            <RouterLink to="/" class="menu-link">
                خانه
            </RouterLink>

              <RouterLink to="/about" class="menu-link">
                درباره ما
            </RouterLink>

            <div class="group-dropdown">
                <span class="menu-link">
                    گروه‌های خبری
                    <i class="fa fa-angle-down"></i>
                </span>
                <div class="group-dropdown-menu">

                    <RouterLink to="/" v-for="group in categories"
                     :key="group.id" href="#" 
                     class="group-item"
                     :class="{'active' : selectedGroupId == group.id}" 
                    @click.prevent="selectGroup(group.id)">                    
                    {{ group.title }}
                </RouterLink>
            </div>
        </div>
    </nav>

        <div class="social-links">
            <a href="#"><i class="fa fa-telegram"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
        </div>

    </div>
</template>

<script setup>

import { useNewsFilter } from '@/features/news/composables/useNewsFilter';
import { useGetNewsGroups } from '@/features/newsGroup/composables/useGetNewsGroups.js';
import { useNewsStore } from '@/features/news/store/newsStore';
import { storeToRefs } from 'pinia';
import '../styles/headerGroupList.css'
const { selectGroup } = useNewsFilter()

const newsStore = useNewsStore()
const {selectedGroupId} = storeToRefs(newsStore)

const {
    data:categories,
    isLoading:isLoadingCategories
} = useGetNewsGroups()

</script>

<style></style>