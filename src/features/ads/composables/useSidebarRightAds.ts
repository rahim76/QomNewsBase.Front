import { computed } from 'vue'
import { useGetAds } from './useGetAdsQuery'
import { AdPositionTypeEnum } from '../types/AdPositionTypeEnum'

export const useSidebarRightAds = (positionType: AdPositionTypeEnum) => {
  const query = useGetAds()

  const ads = computed(() => {
    if (!query.data.value) return []

    const groupData = query.data.value.data?.find((a) => a.positionType === positionType)

    return groupData?.ads ?? []
  })

  return { ...query, data: ads }
}
