import { fetchNewsGroups } from '@/entities/newsGroup/api/newsGroupApi'
import { NEWS_GROUPS_KEY } from '@/entities/newsGroup/model/keys'
import { useQuery } from '@tanstack/vue-query'

export const useGetNewsGroups = () => {
  return useQuery({
    queryKey: [NEWS_GROUPS_KEY],
    queryFn: async () => {
      const data = await fetchNewsGroups()
      return data
    },
  })
}
