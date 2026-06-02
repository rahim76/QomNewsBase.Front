import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { sendComment } from '@/features/comment/api/commentApi'
import { LAST_COMMENTS_KEY } from '@/features/comment/model/keys'
import { NEWS_DETAIL_KEY } from '@/features/news/model/keys'
import { useNewsStore } from '@/features/news/store/newsStore'
import { storeToRefs } from 'pinia'

export const useAddComment = () => {
  const queryClient = useQueryClient()

  const newsStore = useNewsStore()

  const { selectedNewsId } = storeToRefs(newsStore)

  return useMutation({
    mutationFn: sendComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [LAST_COMMENTS_KEY] })
      queryClient.invalidateQueries({ queryKey: [NEWS_DETAIL_KEY, selectedNewsId.value] })
    },
  })
}
