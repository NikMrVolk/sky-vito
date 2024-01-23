'use client'

import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import AddAndEditItem from '../modals/AddAndEditItem'
import Modal from '../UI/modals/Modal'

import { useIsAuthAndLogOut } from '@/hooks/auth/useIsAuthAndLogOut'
import { LOGIN_ROUTE } from '@/utils/constants/routes'

export default function AddItemFooter() {
    const router = useRouter()
    const [active, setActive] = useState<boolean>(false)
    const { isAuth } = useIsAuthAndLogOut()

    return (
        <>
            {isAuth ? (
                <Image
                    src="/images/mobileFooter/add.png"
                    alt="add"
                    width={42}
                    height={42}
                    onClick={() => setActive(true)}
                />
            ) : (
                <Image
                    src="/images/mobileFooter/add.png"
                    alt="add"
                    width={42}
                    height={42}
                    onClick={() => router.push(LOGIN_ROUTE)}
                />
            )}

            <Modal active={active} setActive={setActive}>
                <AddAndEditItem setActive={setActive} />
            </Modal>
        </>
    )
}
