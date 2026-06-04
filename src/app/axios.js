import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://localhost:7084/api',
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
    // 'Authorization': 'Bearer your-token-here'
  },
  timeout: 10000,
})

export default apiClient
