'use client'

import Link from 'next/link'

import useScreenSize from '@/hooks/common/useScreenSize'
import { ITEM_ROUTE } from '@/utils/constants/routes'
import { cuttingItemNameInCard } from '@/utils/formatting/cuttingItemNameInCard'

interface ItemCardProps {
    id: string
    imgLink: string
    itemName: string
    city: string
    created: number
}

export default function ItemCard({ id, imgLink, itemName, city, created }: ItemCardProps) {
    const { width } = useScreenSize()

    return (
        <Link href={`${ITEM_ROUTE}/${id}`}>
            <div
                className="flex w-34.25 cursor-pointer flex-col gap-2.5 rounded-md pb-5 shadow-itemCard 
            duration-500 hover:scale-5 sm:h-107.5 sm:w-67.5 sm:pb-0"
            >
                <div
                    style={{ backgroundImage: `url("${imgLink}")` }}
                    className="min-h-33 rounded-t-md bg-gray-300 bg-cover bg-center bg-no-repeat sm:h-67.5"
                />

                <div className="flex flex-col gap-2.5 px-2.5">
                    <h2 className="h-13 text-sm tracking-tight text-layoutBlue sm:text-1.5xl">
                        {cuttingItemNameInCard(itemName, width)}
                    </h2>
                    <div className="font-bold sm:text-1.5xl">2 200 ₽</div>
                    <div className="flex flex-col gap-1 text-sm text-layoutGray sm:text-base">
                        <div>{city}</div>
                        <div>{created}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
