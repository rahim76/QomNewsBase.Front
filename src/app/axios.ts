import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://localhost:44328/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    // 'Authorization': 'Bearer your-token-here'
  },
  timeout: 10000,
})

export default apiClient
