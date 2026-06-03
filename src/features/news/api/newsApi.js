import axios from '@/app/axios'

export const fetchNews = async (newsGroupId, pageNumber = 1, pageSize = 1000) => {
  const res = await axios.get(
    `/News?newsGroupId=${newsGroupId}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
  )
  return res.data
}

export const getNewsDetail = async (id) => {
  const res = await axios.get(`/News/${id}`)
  return res.data
}

export const fetchMostViewedNews = async (id) => {
  const res = await axios.get(`/News/MostViewedNews/${id}`)
  return res.data
}
