import { getLastComments } from '../api/commentApi'
import { LAST_COMMENTS_KEY } from '../model/keys'
import { useQuery } from '@tanstack/vue-query'

export const useGetLastCommentsQuery = (takeCommensCount) => {
  return useQuery({
    queryKey: [LAST_COMMENTS_KEY, () => takeCommensCount.value],
    queryFn: async () => {
      const data = await getLastComments(takeCommensCount.value)
      return data.data
    },
  })
}
