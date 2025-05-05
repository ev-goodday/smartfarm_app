import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000'

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30초
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
