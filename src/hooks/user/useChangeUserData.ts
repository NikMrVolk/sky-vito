import { useMutation, useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user/user.service'
import { ChangeUserDataRequest } from '@/services/user/user.types'
import { QueryKeys } from '@/utils/constants/reactQuery'

export const useChangeUserData = () => {
    const {
        data: userData,
        refetch,
        isLoading,
    } = useQuery({
        queryKey: [QueryKeys.GET_CURRENT_USER],
        queryFn: () => userService.getCurrent(),
    })

    const { mutate: changeUserData } = useMutation({
        mutationKey: [QueryKeys.DELETE_ITEM],
        mutationFn: (data: ChangeUserDataRequest) => userService.changeUserData(data),
        onSuccess: () => refetch(),
    })

    const { mutate: changeUserImg, isPending } = useMutation({
        mutationKey: [QueryKeys.CHANGE_USER_IMG],
        mutationFn: (data: FormData) => userService.addUserImg(data),
        onSuccess: () => {
            refetch()
        },
    })

    const isAddImgLoading = isLoading || isPending

    return { userData, changeUserImg, changeUserData, isAddImgLoading }
}
