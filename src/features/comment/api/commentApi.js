import axios from '@/app/axios'

export const sendComment = async (payload) => {
  const data = await axios.post('/Comment', payload)
  return data.data
}

export const deleteComment = async (commentId) => {
  const data = await axios.delete(`/Comment/${commentId}`)
  return data.data
}

export const updateComment = async ({ id, commentBody }) => {
  const data = await axios.put('/Comment', { id, commentBody })
  return data.data
}

export const getLastComments = async (takeCommensCount = 5) => {
  const data = await axios.get(`/Comment/GetLastComments/${takeCommensCount}`)
  return data.data
}

export const getCommentsByNewsId = async (newsId) => {
  const data = await axios.get(`/Comment/GetByNewsId${newsId}`)
  return data.data
}
