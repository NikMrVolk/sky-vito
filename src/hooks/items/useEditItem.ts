import { useMutation, useQuery } from '@tanstack/react-query'

import { FormDataType } from '@/components/modals/AddAndEditItem'
import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

export const useEditItem = (onSuccess: () => void, slug: string) => {
    const { refetch } = useQuery({
        queryKey: [QueryKeys.GET_ONE_AD],
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

    const isPending = isChangePending

    return { changeItemText, isPending }
}
