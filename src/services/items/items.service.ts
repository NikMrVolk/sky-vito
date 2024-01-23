import { ItemType } from './items.types'

import { axiosClassic } from '@/utils/api/axios'

export const itemsService = {
    async getAll() {
        const response = await axiosClassic.get<ItemType[]>(`/ads`)

        return response
    },
}
