import { UserType } from './user.types'

import { instance } from '@/utils/api/axios'

export const userService = {
    async getCurrent() {
        const response = await instance.get<UserType>(`/user`)

        return response.data
    },
}
