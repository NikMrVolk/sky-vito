import { IComments, ItemType } from './items.types'

import { FormDataType } from '@/components/modals/AddAndEditItem'
import { axiosClassic, instance } from '@/utils/api/axios'

export const itemsService = {
    async getAll() {
        const response = await axiosClassic.get<ItemType[]>(`/ads`)

        return response
    },

    async getOne(slug: string) {
        const response = await axiosClassic.get<ItemType>(`/ads/${slug}`)

        return response
    },

    async addItemWithImage(data: FormDataType) {
        const response = await instance.post<ItemType>(`/ads`, data.files, {
            params: {
                title: data.title,
                description: data.description,
                price: data.price,
            },
        })

        return response
    },

    async addItemWithoutImage(data: FormDataType) {
        const response = await instance.post<ItemType>(`/adstext`, data)

        return response
    },

    async getAllComments() {
        const response = await axiosClassic.get<IComments[]>(`/comments`)

        return response
    },
}
