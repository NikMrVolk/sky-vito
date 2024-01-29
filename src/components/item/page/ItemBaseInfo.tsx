'use client'

import { useState } from 'react'

import AddComment from '@/components/modals/AddComment'
import Modal from '@/components/UI/modals/Modal'
import { IComments } from '@/services/items/items.types'

interface ItemBaseInfoProps {
    title: string
    createdOn: string
    city: string
    price: number
    comments: IComments[]
}

export default function ItemBaseInfo({
    title,
    createdOn,
    city,
    price,
    comments,
}: ItemBaseInfoProps) {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div className="-mb-2.5 flex flex-col gap-2.5">
            <h4 className="text-lg font-bold leading-6 sm:text-2xl lg:text-3.5xl">{title}</h4>
            <div className="mb-2.5 flex flex-col gap-1 text-sm text-layoutGray lg:text-base">
                <div>{createdOn}</div>
                <div>{city}</div>
                <div className="inline text-layoutBlue">
                    <span className="cursor-pointer" onClick={() => setActive(true)}>
                        {comments.length} отзывов
                    </span>
                </div>
            </div>
            <div className="text-lg font-bold lg:text-2.5xl">{price} ₽</div>
            <Modal active={active} setActive={setActive} classes={{ content: 'max-w-150' }}>
                <AddComment setActive={setActive} comments={comments} />
            </Modal>
        </div>
    )
}
