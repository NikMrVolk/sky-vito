import { saveTokenStorage } from './auth.helpers'
import { ITokens, IUser } from './auth.types'

import { axiosClassic } from '@/utils/api/axios'

export enum EnumTokens {
    ACCESS_TOKEN = 'accessToken',
    REFRESH_TOKEN = 'refreshToken',
}

export const authService = {
    async register(data: IUser) {
        const response = await axiosClassic.post<IUser>(`/auth/register`, data)

        return response
    },

    async login(data: IUser) {
        const response = await axiosClassic.post<ITokens>(`/auth/login`, data)
        console.log(2)

        if (response.data.access_token) {
            console.log(1)
            saveTokenStorage(response.data.access_token, response.data.refresh_token)
        }

        return response
    },

    async getNewTokens(data: { access_token: string; refresh_token: string }) {
        const response = await axiosClassic.put<ITokens>(`/auth/login`, data)

        if (response.data.access_token && response.data.refresh_token)
            saveTokenStorage(response.data.access_token, response.data.refresh_token)

        return response
    },
}
