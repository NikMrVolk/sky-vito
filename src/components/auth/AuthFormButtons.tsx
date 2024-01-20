import Link from 'next/link'

import Button from '../UI/buttons/Button'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/constants/routes'

export default function AuthFormButtons({ isLogin }: { isLogin: boolean }) {
    return (
        <div className="mt-2.5 flex w-full flex-col gap-2.5">
            <Button>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
            <Link href={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE} className="w-full">
                <Button className="w-full border border-loginInput bg-white text-black hover:bg-gray-200">
                    {isLogin ? 'Зарегистрироваться' : 'Войти'}
                </Button>
            </Link>
        </div>
    )
}
