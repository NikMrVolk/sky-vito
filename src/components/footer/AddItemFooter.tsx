'use client'

import { useState } from 'react'

import Image from 'next/image'

import Modal from '../UI/modals/Modal'

export default function AddItemFooter() {
    const [active, setActive] = useState<boolean>(false)

    return (
        <>
            <Image
                src="/images/mobileFooter/add.png"
                alt="add"
                width={42}
                height={42}
                onClick={() => setActive(true)}
            />
            <Modal active={active} setActive={setActive}>
                Add new
            </Modal>
        </>
    )
}
