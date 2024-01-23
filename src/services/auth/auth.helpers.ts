import Cookies from 'js-cookie'

import { EnumTokens } from './auth.service'

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken as string
}

export const getRefreshToken = (): string => {
    const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
    return refreshToken as string
}

export const saveTokenStorage = (accessToken: string, refreshToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: 'localhost',
        sameSite: 'strict',
        expires: 1,
    })
    Cookies.set(EnumTokens.REFRESH_TOKEN, refreshToken, {
        domain: 'localhost',
        sameSite: 'strict',
        expires: 1,
    })
}

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
    Cookies.remove(EnumTokens.REFRESH_TOKEN)
}
