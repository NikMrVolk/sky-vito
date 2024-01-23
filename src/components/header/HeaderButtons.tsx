'use client'

import { useState } from 'react'

import { DoorOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'

import AddAndEditItem from '../modals/AddAndEditItem'
import Button from '../UI/buttons/Button'
import Modal from '../UI/modals/Modal'

import { useIsAuthAndLogOut } from '@/hooks/auth/useIsAuthAndLogOut'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/utils/constants/routes'

export default function HeaderButtons() {
    const [active, setActive] = useState<boolean>(false)

    const { isAuth, logOut } = useIsAuthAndLogOut()
    const router = useRouter()

    return (
        <div className="hidden gap-2.5 sm:flex">
            {isAuth ? (
                <>
                    <Button className="border" onClick={() => setActive(true)}>
                        Разместить объявление
                    </Button>
                    <Button className="border" onClick={() => router.push(PROFILE_ROUTE)}>
                        Личный кобинет
                    </Button>
                    <Button className="border px-2" onClick={() => logOut()}>
                        <DoorOpen />
                    </Button>
                </>
            ) : (
                <Button className="border" onClick={() => router.push(LOGIN_ROUTE)}>
                    Войти
                </Button>
            )}

            <Modal active={active} setActive={setActive}>
                <AddAndEditItem setActive={setActive} />
            </Modal>
        </div>
    )
}
