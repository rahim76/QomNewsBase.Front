import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { sendComment } from '@/entities/comment/api/commentApi'
import { LAST_COMMENTS_KEY } from '@/entities/comment/model/keys'
import { NEWS_DETAIL_KEY } from '@/entities/news/model/keys'
import { useNewsStore } from '@/entities/news/model/newsStore'
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
