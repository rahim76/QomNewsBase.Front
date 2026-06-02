import { useNewsStore } from '@/features/news/store/newsStore'

export const useNewsFilter = () => {
  const newsStore = useNewsStore()

  const selectGroup = (groupId) => {
    newsStore.setSelectedGroupId(groupId)
  }

  return {
    selectGroup,
  }
}
