import { fetchNews } from '@/features/news/api/newsApi'
import { GET_NEWS_KEY } from '@/features/news/model/keys'
import { useQuery } from '@tanstack/vue-query'

export const useGetNewsQuery = (selectedGroupId, pageNumber, pageSize) => {
  return useQuery({
    queryKey: [GET_NEWS_KEY, selectedGroupId, pageNumber],
    queryFn: async () => {
      const res = await fetchNews(selectedGroupId.value, pageNumber.value, pageSize.value)
      return res
    },
  })
}
