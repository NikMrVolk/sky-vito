'use client'

import Image from 'next/image'
import Link from 'next/link'

import useScreenSize from '@/hooks/common/useScreenSize'
import { ITEM_ROUTE } from '@/utils/constants/routes'
import { cuttingItemNameInCard } from '@/utils/formatting/cuttingItemNameInCard'

interface ItemCardProps {
    id: string
    imgLink: string
    itemName: string
    city: string
    created: string
    price: number
}

export default function ItemCard({ id, imgLink, itemName, city, created, price }: ItemCardProps) {
    const { width } = useScreenSize()

    return (
        <Link href={`${ITEM_ROUTE}/${id}`}>
            <div
                className="flex w-34.25 cursor-pointer flex-col gap-2.5 rounded-md pb-5 shadow-itemCard 
            duration-500 hover:scale-5 sm:h-107.5 sm:w-67.5 sm:pb-0"
            >
                <div className="min-h-33 rounded-t-md bg-gray-300 bg-cover bg-center bg-no-repeat sm:h-67.5">
                    {imgLink ? (
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL + imgLink}`}
                            alt="photo"
                            width={100}
                            height={100}
                            className="h-33 max-h-33 w-full object-cover sm:h-full sm:max-h-67.5"
                        />
                    ) : (
                        <></>
                    )}
                </div>

                <div className="flex flex-col gap-2.5 px-2.5">
                    <h2 className="h-13 text-sm tracking-tight text-layoutBlue sm:text-1.5xl">
                        {cuttingItemNameInCard(itemName, width)}
                    </h2>
                    <div className="font-bold sm:text-1.5xl">{price} ₽</div>
                    <div className="flex flex-col gap-1 text-sm text-layoutGray sm:text-base">
                        <div>{city}</div>
                        <div>{created}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
