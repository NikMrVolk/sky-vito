import { UserType } from './user.types'

import { instance } from '@/utils/api/axios'

export const userService = {
    async getAll() {
        const response = await instance.get<UserType[]>(`/user/all`)

        return response.data
    },

    async getCurrent() {
        const response = await instance.get<UserType>(`/user`)

        return response.data
    },
}
