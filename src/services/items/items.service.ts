import { IComments, ItemType } from './items.types'

import { FormDataType } from '@/components/modals/AddAndEditItem'
import { axiosClassic, instance } from '@/utils/api/axios'

export const itemsService = {
    async getAll() {
        const response = await axiosClassic.get<ItemType[]>(`/ads`)

        return response
    },

    async getUserItems() {
        const response = await instance.get<ItemType[]>(`/ads/me`)

        return response
    },

    async getOne(slug: string) {
        const response = await axiosClassic.get<ItemType>(`/ads/${slug}`)

        return response
    },

    async addItemWithImage(data: FormDataType) {
        const response = await instance.post<ItemType>(`/ads`, data.formData, {
            params: {
                title: data.title,
                description: data.description,
                price: data.price,
            },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        return response
    },

    async addItemWithoutImage(data: FormDataType) {
        const response = await instance.post<ItemType>(`/adstext`, data)

        return response
    },

    async addImgToItem(data: { formData: FormData; slug: string }) {
        const response = await instance.post<ItemType>(`/ads/${data.slug}/image`, data.formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        return response
    },

    async changeItemText(data: { data: FormDataType; slug: string }) {
        const response = await instance.patch<ItemType>(`/ads/${data.slug}`, data.data)

        return response
    },

    async deleteItem(slug: string) {
        const response = await instance.delete<string>(`/ads/${slug}`)

        return response
    },

    async getAllComments() {
        const response = await axiosClassic.get<IComments[]>(`/comments`)

        return response
    },

    async getItemComments(slug: string) {
        const response = await axiosClassic.get<IComments[]>(`/ads/${slug}/comments`)

        return response
    },
}
