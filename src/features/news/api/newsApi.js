import axios from '@/app/axios'

export const fetchNews = async (newsGroupId) => {
  const res = await axios.get(`/News?newsGroupId=${newsGroupId}`)
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
