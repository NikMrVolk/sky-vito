'use client'

import { useEffect, useState } from 'react'

import { redirect, useRouter } from 'next/navigation'

import { LOGIN_ROUTE } from '@/utils/constants/routes'

export const useIsAuthAndLogOut = (): {
    isAuth: boolean
    logOut: () => void
    moveToLogin: () => void
} => {
    const router = useRouter()
    const [isAuth, setIsAuth] = useState<boolean>(!!null)

    useEffect(() => {
        setIsAuth(!!localStorage.getItem('tokens'))
    }, [])

    const logOut = () => {
        localStorage.removeItem('tokens')
        router.push(LOGIN_ROUTE)
    }

    const moveToLogin = () => {
        if (!isAuth) redirect(LOGIN_ROUTE)
    }

    return { isAuth, logOut, moveToLogin }
}
