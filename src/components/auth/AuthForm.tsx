'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFormButtons from './AuthFormButtons'
import AuthInputs from './AuthInputs'

import { useAuth } from '@/hooks/auth/useAuth'
import { LOGIN_ROUTE, MAIN_ROUTE } from '@/utils/constants/routes'

export interface IAuthFormData {
    id?: number
    email: string
    password: string
    confirmedPassword?: string
    name?: string
    surname?: string
    role?: 'admin' | 'user'
    phone?: number
    city?: string
}

export default function AuthForm() {
    const pathname = usePathname()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IAuthFormData>({ mode: 'onChange' })
    const { login, registration } = useAuth()
    const isLogin = pathname === LOGIN_ROUTE

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        isLogin ? login(data) : registration(data)
    }

    return (
        <form
            className="flex w-full flex-col items-center gap-7.5 px-5 xs:max-w-96 xs:rounded-md xs:px-10 xs:py-5 xs:shadow-itemCard"
            onSubmit={handleSubmit(onSubmit)}
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
            <AuthInputs register={register} errors={errors} isLogin={isLogin} watch={watch} />
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
