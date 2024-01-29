import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'
import { MAIN_ROUTE } from '@/utils/constants/routes'

export const useDeleteItemAndImg = (slug: string) => {
    const router = useRouter()

    const { refetch } = useQuery({
        queryKey: [QueryKeys.GET_ONE_AD + slug],
        queryFn: () => itemsService.getOne(slug),
        enabled: false,
    })

    const { mutate: deleteItem } = useMutation({
        mutationKey: [QueryKeys.DELETE_ITEM],
        mutationFn: () => itemsService.deleteItem(slug),
        onSuccess: () => router.push(MAIN_ROUTE),
    })

    const { mutate: deleteImage } = useMutation({
        mutationKey: [QueryKeys.DELETE_IMAGE],
        mutationFn: (data: { slug: string; file_url: string }) => itemsService.deleteImage(data),
        onSuccess: () => refetch(),
    })

    return { deleteItem, deleteImage }
}
