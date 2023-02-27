import type { AxiosInstance } from 'axios'
import axios from 'axios'

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosClient
