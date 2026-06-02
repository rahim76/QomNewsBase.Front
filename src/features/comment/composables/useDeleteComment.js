import { deleteComment } from '@/features/comment/api/commentApi'
import { LAST_COMMENTS_KEY } from '@/features/comment/model/keys'
import { NEWS_DETAIL_KEY } from '@/features/news/model/keys'
import { useNewsStore } from '@/features/news/store/newsStore'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'

export const useDeleteComment = () => {
  const queryClient = useQueryClient()
  const newsStore = useNewsStore()

  const { selectedNewsId } = storeToRefs(newsStore)

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: [NEWS_DETAIL_KEY, selectedNewsId.value] })
      queryClient.invalidateQueries({ queryKey: [LAST_COMMENTS_KEY] })
    },
    onError: (error, variables) => {
      console.error('Error deleting comment:', error, variables)
    },
  })
}
