'use client'

import { useEffect } from 'react'

import { useIsAuthAndLogOut } from '@/hooks/auth/useIsAuthAndLogOut'

export default function IsAuthComponent() {
    const { moveToLogin, isAuth } = useIsAuthAndLogOut()

    useEffect(() => {
        if (isAuth) {
            moveToLogin()
        }
    }, [isAuth, moveToLogin])

    return <div />
}
