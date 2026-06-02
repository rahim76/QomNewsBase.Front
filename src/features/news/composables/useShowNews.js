import { getNewsDetail } from '@/features/news/api/newsApi'
import { useQuery } from '@tanstack/vue-query'
import { NEWS_DETAIL_KEY } from '@/features/news/model/keys'

export const useShowNews = (selectedNewsId) => {
  return useQuery({
    queryKey: [NEWS_DETAIL_KEY, selectedNewsId.value],
    queryFn: async () => {
      const res = await getNewsDetail(selectedNewsId.value)
      return res.data
    },
    enabled: () => selectedNewsId.value != null,
  })
}
