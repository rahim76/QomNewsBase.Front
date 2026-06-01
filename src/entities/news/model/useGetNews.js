import { fetchNews } from '@/entities/news/api/newsApi'
import { GET_NEWS_KEY } from '@/entities/news/model/keys'
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
