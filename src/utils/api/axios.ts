/* eslint-disable complexity */
import axios, { CreateAxiosDefaults } from 'axios'

import { getContentType } from './api.helpers'

import { authService } from '@/services/auth/auth.service'
import { getAccessToken, getRefreshToken, removeFromStorage } from '@/services/auth/auth.helpers'

const axiosOptions: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: getContentType(),
    withCredentials: true,
}

export const axiosClassic = axios.create(axiosOptions)

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

instance.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        const access_token = getAccessToken()
        const refresh_token = getRefreshToken()

        try {
            await authService.getNewTokens({ access_token, refresh_token })
            return instance.request(originalRequest)
        } catch (e) {
            if (e) removeFromStorage()
        }
    },
)
