'use client'

import { useRouter } from 'next/navigation'

import Button from '../UI/buttons/Button'

import { PROFILE_ROUTE } from '@/utils/constants/routes'

export default function HeaderButtons() {
    const router = useRouter()

    return (
        <div className="hidden gap-2.5 sm:flex">
            <Button className="border">Разместить объявление</Button>
            <Button className="border" onClick={() => router.push(PROFILE_ROUTE)}>
                Личный кобинет
            </Button>
        </div>
    )
}
