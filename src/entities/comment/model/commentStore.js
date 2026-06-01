import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', {
  state: () => ({
    takeCommensCount: 5,
  }),
  getters: {},
  actions: {},
})
