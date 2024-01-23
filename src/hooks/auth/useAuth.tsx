'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { IAuthFormData } from '@/components/auth/AuthForm'
import { authService } from '@/services/auth/auth.service'
import { QueryKeys } from '@/utils/constants/reactQuery'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/utils/constants/routes'

export const useAuth = () => {
    const { push } = useRouter()

    const {
        mutate: login,
        isPending: isLoginPending,
        isSuccess: isLoginSuccess,
    } = useMutation({
        mutationKey: [QueryKeys.LOGIN],
        mutationFn: (data: IAuthFormData) => authService.login(data),
        onSuccess({ data }) {
            push(PROFILE_ROUTE)
            localStorage.setItem('tokens', JSON.stringify(data))
        },
    })

    const {
        mutate: registration,
        isPending: isRegistrationPending,
        isSuccess: isRegistrationSuccess,
    } = useMutation({
        mutationKey: [QueryKeys.REGISTRATION],
        mutationFn: (data: IAuthFormData) => authService.register(data),
        onSuccess() {
            push(LOGIN_ROUTE)
        },
    })

    const isPending = isRegistrationPending || isLoginPending
    const isSuccess = isRegistrationSuccess || isLoginSuccess

    return {
        registration,
        login,
        isPending,
        isSuccess,
    }
}
