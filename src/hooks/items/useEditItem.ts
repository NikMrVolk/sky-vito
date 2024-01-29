import { useMutation, useQuery } from '@tanstack/react-query'

import { FormDataType } from '@/components/modals/AddAndEditItem'
import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

export const useEditItem = (onSuccess: () => void, slug: string) => {
    const { refetch } = useQuery({
        queryKey: [QueryKeys.GET_ONE_AD + slug],
        queryFn: () => itemsService.getOne(slug),
        enabled: false,
    })

    const { mutate: changeItemText, isPending: isChangePending } = useMutation({
        mutationKey: [QueryKeys.CHANGE_ITEM_TEXT],
        mutationFn: (data: FormDataType) => itemsService.changeItemText({ data, slug }),
        onSuccess: () => {
            onSuccess()
            refetch()
        },
    })

    const { mutate: addImgToItem, isPending: isAddImgPending } = useMutation({
        mutationKey: [QueryKeys.ADD_IMG_TO_ITEM],
        mutationFn: (formData: FormData) => itemsService.addImgToItem({ formData, slug }),
        onSuccess: () => {
            onSuccess()
            refetch()
        },
    })

    const isPending = isChangePending || isAddImgPending

    return { changeItemText, addImgToItem, isPending }
}
