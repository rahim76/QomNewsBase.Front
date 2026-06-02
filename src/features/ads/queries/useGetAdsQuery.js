import { useQuery } from '@tanstack/vue-query'
import { GET_ADS_KEY } from '../model/Keys'
import { getAds } from '../api/adsApi'

export const useGetAds = () => {
  return useQuery({
    queryKey: [GET_ADS_KEY],
    queryFn: async () => {
      const res = await getAds()
      return res.data
    },
  })
}
