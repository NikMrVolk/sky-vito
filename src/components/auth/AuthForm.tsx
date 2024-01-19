'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import LoginInput from '../UI/inputs/LoginInput'

import AuthFormButtons from './AuthFormButtons'

import { LOGIN_ROUTE, MAIN_ROUTE } from '@/utils/constants/routes'

export default function AuthForm() {
    const pathname = usePathname()

    const isLogin = pathname === LOGIN_ROUTE

    return (
        <form
            className="flex w-full flex-col items-center gap-7.5 px-5 xs:max-w-96 xs:rounded-md xs:px-10 xs:py-5 xs:shadow-itemCard"
            onSubmit={e => {
                e.preventDefault()
            }}
        >
            <div className="cursor-pointer">
                <Image
                    src="/images/logo/logoWithBlackWords.png"
                    alt="logo"
                    width={120}
                    height={18}
                    className="h-4.5 w-30 xs:h-5.25 xs:w-35"
                    quality={100}
                />
            </div>
            <div className="flex w-full flex-col gap-3.5">
                <LoginInput placeholder="Email" />
                <LoginInput placeholder="Пароль" type="password" />
                {!isLogin && (
                    <>
                        <LoginInput placeholder="Повторите пароль" type="password" />
                        <LoginInput placeholder="Имя (необязательно)" />
                        <LoginInput placeholder="Фамилия (необязательно)" />
                        <LoginInput placeholder="Город (необязательно)" />
                    </>
                )}
            </div>
            <AuthFormButtons isLogin={isLogin} />
            <div className="-mt-5 self-end">
                Не хотите войти?{' '}
                <Link href={MAIN_ROUTE} className="text-layoutBlue underline">
                    На главную!
                </Link>
            </div>
        </form>
    )
}
