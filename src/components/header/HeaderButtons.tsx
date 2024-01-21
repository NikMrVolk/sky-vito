'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Button from '../UI/buttons/Button'
import Modal from '../UI/modals/Modal'

import { PROFILE_ROUTE } from '@/utils/constants/routes'
import AddAndEditItem from '../modals/AddAndEditItem'

export default function HeaderButtons() {
    const [active, setActive] = useState<boolean>(false)
    const router = useRouter()

    return (
        <div className="hidden gap-2.5 sm:flex">
            <Button className="border" onClick={() => setActive(true)}>
                Разместить объявление
            </Button>
            <Button className="border" onClick={() => router.push(PROFILE_ROUTE)}>
                Личный кобинет
            </Button>
            <Modal active={active} setActive={setActive}>
                <AddAndEditItem setActive={setActive} />
            </Modal>
        </div>
    )
}
