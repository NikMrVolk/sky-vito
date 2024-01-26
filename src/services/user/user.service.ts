import { ChangeUserDataRequest, UserType } from './user.types'

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

    async changeUserData(data: ChangeUserDataRequest) {
        const response = await instance.patch<UserType>(`/user`, data)

        return response.data
    },
}
