import axios from 'axios'

// import { Message } from 'element-plus'

const ajax = axios.create(
  {
    baseURL: '/api'
  }
)

export default ajax
