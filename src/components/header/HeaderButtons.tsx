'use client'

import { usePathname, useRouter } from 'next/navigation'

import Button from '../UI/buttons/Button'

import { MODAL_QUERY, PROFILE_ROUTE } from '@/utils/constants/routes'

export default function HeaderButtons() {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className="hidden gap-2.5 sm:flex">
            <Button className="border" onClick={() => router.push(pathname + MODAL_QUERY)}>
                Разместить объявление
            </Button>
            <Button className="border" onClick={() => router.push(PROFILE_ROUTE)}>
                Личный кобинет
            </Button>
        </div>
    )
}
