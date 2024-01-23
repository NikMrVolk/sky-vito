import { IComments, ItemType } from './items.types'

import { axiosClassic } from '@/utils/api/axios'

export const itemsService = {
    async getAll() {
        const response = await axiosClassic.get<ItemType[]>(`/ads`)

        return response
    },

    async getOne(slug: string) {
        const response = await axiosClassic.get<ItemType>(`/ads/${slug}`)

        return response
    },

    async getAllComments() {
        const response = await axiosClassic.get<IComments[]>(`/comments`)

        return response
    },
}
