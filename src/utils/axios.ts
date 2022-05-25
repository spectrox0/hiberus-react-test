import axios from 'axios'
import { config } from '../config'
import { getCache } from './cache'
import { AuthSession } from '../types'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 0.25 * 60 * 1000, // Hold onto the data for 15 seconds
  exclude: {
    methods: ['put', 'patch', 'delete', 'post'],
  },
})
export const axiosClient = () =>
  axios.create({
    baseURL: config.baseAPIUrl,
    adapter: cache.adapter,
    headers: {
      Authorization: `Bearer ${getCache<AuthSession | undefined>('session')?.accessToken}`,
    },
  })
