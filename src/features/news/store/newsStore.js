import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    selectedGroupId: 0,
    selectedNewsId: null,
    isNewsModalOpen: false,
  }),

  actions: {
    showNews(id) {
      this.setSelectedNewsId(id)
      this.isNewsModalOpen = true
    },
    hideNews() {
      this.clearSelectedNews()
      this.isNewsModalOpen = false
    },
    setSelectedNewsId(id) {
      this.selectedNewsId = id
    },
    clearSelectedNews() {
      this.selectedNewsId = null
    },
    setSelectedGroupId(id) {
      this.selectedGroupId = id
    },
  },
})
