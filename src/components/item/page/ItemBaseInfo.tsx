'use client'

import { useState } from 'react'

import AddComment from '@/components/modals/AddComment'
import Modal from '@/components/UI/modals/Modal'

export default function ItemBaseInfo() {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div className="-mb-2.5 flex flex-col gap-2.5">
            <h4 className="text-lg font-bold leading-6 sm:text-2xl lg:text-3.5xl">
                Ракетка для большого тенниса Triumph Pro STС Б/У
            </h4>
            <div className="mb-2.5 flex flex-col gap-1 text-sm text-layoutGray lg:text-base">
                <div>Сегодня в 10:45</div>
                <div>Санкт-Петербург</div>
                <div className="inline text-layoutBlue">
                    <span onClick={() => setActive(true)}>4 отзыва</span>
                </div>
            </div>
            <div className="text-lg font-bold lg:text-2.5xl">2 200 ₽</div>
            <Modal active={active} setActive={setActive} classes={{ content: 'max-w-150' }}>
                <AddComment setActive={setActive} />
            </Modal>
        </div>
    )
}
