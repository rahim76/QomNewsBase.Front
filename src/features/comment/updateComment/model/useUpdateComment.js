import { updateComment } from '@/entities/comment/api/commentApi'
import { NEWS_DETAIL_KEY } from '@/entities/news/model/keys'
import { useNewsStore } from '@/entities/news/model/newsStore'
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
