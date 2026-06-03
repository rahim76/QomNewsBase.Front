import { computed } from 'vue'
import { useGetAds } from './useGetAdsQuery'

export const useSidebarRightAds = () => {
  const query = useGetAds()

  const ads = computed(() => {
    if (!query.data.value) return []

    const group = query.data.value.find((a) => a.positionType === 20)

    return group?.ads || []
  })

  return { ...query, data: ads }
}
