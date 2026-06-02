<template>
  <BaseModal :show="newsStore.isNewsModalOpen" @close="newsStore.hideNews()" >

    <NewsDetail v-if="data" :news="data" />

    <hr>

    <CommentsBox />

    <CloseButton @close="newsStore.hideNews()"/>

  </BaseModal>

</template>

<script setup>

import BaseModal from '@/shared/ui/BaseModal/BaseModal.vue'
import NewsDetail from '@/features/news/widgets/NewsDetail/NewsDetail.vue'
import { useNewsStore } from '@/features/news/store/newsStore'
import { useShowNews } from '@/features/news/composables/useShowNews'
import { storeToRefs } from 'pinia'
import CloseButton from '@/shared/ui/ModalFooter/CloseButton.vue'
import CommentsBox from '@/features/comment/widgets/CommentsBox/CommentsBox.vue'

const newsStore = useNewsStore()

const {selectedNewsId} = storeToRefs(newsStore)

const { data } = useShowNews(selectedNewsId)


</script>

<style>



</style>