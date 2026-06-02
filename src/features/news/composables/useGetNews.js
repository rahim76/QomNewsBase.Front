import { fetchNews } from '@/features/news/api/newsApi'
import { GET_NEWS_KEY } from '@/features/news/model/keys'
import { useQuery } from '@tanstack/vue-query'

export const useGetNews = (selectedGroupId) => {
  return useQuery({
    queryKey: [GET_NEWS_KEY, () => selectedGroupId.value],
    queryFn: async () => {
      const data = await fetchNews(selectedGroupId.value)
      return data.data
    },
  })
}
