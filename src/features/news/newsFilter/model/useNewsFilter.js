import { useNewsStore } from '@/entities/news/model/newsStore'

export const useNewsFilter = () => {
  const newsStore = useNewsStore()

  const selectGroup = (groupId) => {
    newsStore.setSelectedGroupId(groupId)
  }

  return {
    selectGroup,
  }
}
