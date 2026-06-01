import axios from '@/app/axios'

export const fetchNewsGroups = async () => {
  const res = await axios.get('/NewsGroup')
  return [{ id: 0, title: 'همه' }, ...res.data.data]
}
