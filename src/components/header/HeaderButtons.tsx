'use client'

import { useState } from 'react'

import { DoorOpen } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import AddAndEditItem from '../modals/AddAndEditItem'
import ChangePassword from '../modals/ChangePassword'
import Button from '../UI/buttons/Button'
import Modal from '../UI/modals/Modal'

import { useIsAuthAndLogOut } from '@/hooks/auth/useIsAuthAndLogOut'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/utils/constants/routes'

export default function HeaderButtons() {
    const [active, setActive] = useState<boolean>(false)
    const [modalActive, setModalActive] = useState<boolean>(false)
    const pathname = usePathname()

    const { isAuth, logOut } = useIsAuthAndLogOut()
    const router = useRouter()

    return (
        <div className="hidden gap-2.5 sm:flex">
            {isAuth ? (
                <>
                    <Button className="border" onClick={() => setActive(true)}>
                        Разместить объявление
                    </Button>
                    {pathname === PROFILE_ROUTE ? (
                        <Button className="border py-2.75" onClick={() => setModalActive(true)}>
                            Редактировать пароль
                        </Button>
                    ) : (
                        <Button className="border" onClick={() => router.push(PROFILE_ROUTE)}>
                            Личный кобинет
                        </Button>
                    )}

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
                <AddAndEditItem modalTitle="Новое объявление" setActive={setActive} />
            </Modal>
            <Modal active={modalActive} setActive={setModalActive}>
                <ChangePassword modalTitle="Изменение пароля" setActive={setModalActive} />
            </Modal>
        </div>
    )
}
