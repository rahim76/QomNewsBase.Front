import { updateComment } from '@/features/comment/api/commentApi'
import { NEWS_DETAIL_KEY } from '@/features/news/model/keys'
import { useNewsStore } from '@/features/news/store/newsStore'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'

export const useUpdateComment = () => {
  const queryClient = useQueryClient()
  const newsStore = useNewsStore()

  const { selectedNewsId } = storeToRefs(newsStore)

  return useMutation({
    mutationFn: updateComment,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [NEWS_DETAIL_KEY, selectedNewsId] })
    },
    onError: (error) => {
      console.error('Error updating comment:', error)
    },
  })
}
