import { useQuery } from '@tanstack/vue-query'
import { getAds } from '../api/adsApi'
import { GET_ADS_KEY } from '../model/Keys'
import { AdResponseDto } from '../types/AdResponseDto'

export const useGetAds = () => {
  return useQuery<AdResponseDto>({
    queryKey: [GET_ADS_KEY],
    queryFn: async () => {
      const res = await getAds()
      return res
    },
  })
}
