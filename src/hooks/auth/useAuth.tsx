'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

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
        onError(e: AxiosError) {
            if (e.response?.data) {
                const errorObject = e.response.data as { detail: string }

                if (errorObject.detail === 'Incorrect email') {
                    toast('пользователя с указанной почтой не существует')
                } else {
                    toast('Неверный пароль')
                }
            }
        },
    })

    const {
        mutate: registration,
        isPending: isRegistrationPending,
        isSuccess: isRegistrationSuccess,
        error,
    } = useMutation({
        mutationKey: [QueryKeys.REGISTRATION],
        mutationFn: (data: IAuthFormData) => authService.register(data),
        onSuccess() {
            push(LOGIN_ROUTE)
        },
        onError(e: AxiosError) {
            if (e.response?.data) {
                const errorObject = e.response.data as { details: string }

                if (errorObject.details.includes('UNIQUE')) {
                    toast('пользователь с указанной почтой уже существует')
                }
            }
        },
    })

    const isPending = isRegistrationPending || isLoginPending
    const isSuccess = isRegistrationSuccess || isLoginSuccess

    return {
        registration,
        login,
        isPending,
        isSuccess,
        error,
    }
}
