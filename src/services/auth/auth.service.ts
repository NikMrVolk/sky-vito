import { IUser } from './auth.types'

import { axiosClassic } from '@/utils/api/axios'

export const authService = {
    async register(data: IUser) {
        const response = await axiosClassic.post<IUser>(`/auth/register`, data)

        return response
    },

    async login(data: IUser) {
        const response = await axiosClassic.post<IUser>(`/auth/login`, data)

        return response
    },
}
