import axios from 'axios'
import { config } from '../config'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const axiosClient = axios.create({
  baseURL: config.baseAPIUrl,
  headers: {
    Authorization: `bearer ${cookies.get('authToken')}`,
  },
})
