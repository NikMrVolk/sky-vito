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

    async addUserImg(data: FormData) {
        const response = await instance.post<UserType>(`/user/avatar`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        return response.data
    },
}
