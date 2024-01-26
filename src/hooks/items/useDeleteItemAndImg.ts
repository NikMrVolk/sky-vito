import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'
import { MAIN_ROUTE } from '@/utils/constants/routes'

export const useDeleteItemAndImg = (slug: string) => {
    const router = useRouter()

    const { mutate: deleteItem } = useMutation({
        mutationKey: [QueryKeys.DELETE_ITEM],
        mutationFn: () => itemsService.deleteItem(slug),
        onSuccess: () => router.push(MAIN_ROUTE),
    })

    return { deleteItem }
}
