import { useQuery } from '@tanstack/vue-query'
import { MOST_VIEWES_NEWS_KEY } from '../model/keys'
import { fetchMostViewedNews } from '../api/newsApi'

export const useMostViewsNewsQuery = (selectedGroupId) => {
  return useQuery({
    queryKey: [MOST_VIEWES_NEWS_KEY, selectedGroupId],
    queryFn: async () => {
      const data = await fetchMostViewedNews(selectedGroupId.value)
      return data.data
    },
  })
}
