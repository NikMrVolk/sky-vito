'use client'

import { useMutation, useQuery } from '@tanstack/react-query'

import { FormDataType } from '@/components/modals/AddAndEditItem'
import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

export const useAddItem = (onSuccess: () => void) => {
    const { refetch } = useQuery({
        queryKey: [QueryKeys.GET_ADS],
        queryFn: itemsService.getAll,
        enabled: false,
    })

    const { mutate: addItemWithoutImg, isPending: addItemWithoutImgPending } = useMutation({
        mutationKey: [QueryKeys.ADD_ITEM_WITHOUT_IMGS],
        mutationFn: (data: FormDataType) => itemsService.addItemWithoutImage(data),
        onSuccess: () => {
            onSuccess()
            refetch()
        },
    })

    const { mutate: addItemWithImg, isPending: addItemWithImgPending } = useMutation({
        mutationKey: [QueryKeys.ADD_ITEM_WITH_IMGS],
        mutationFn: (data: FormDataType) => itemsService.addItemWithImage(data),
        onSuccess: () => {
            onSuccess()
            refetch()
        },
    })

    const isPending = addItemWithImgPending || addItemWithoutImgPending

    return {
        addItemWithImg,
        addItemWithoutImg,
        isPending,
    }
}
