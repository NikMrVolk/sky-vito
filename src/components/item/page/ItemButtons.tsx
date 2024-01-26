'use client'

import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import AddAndEditItem from '@/components/modals/AddAndEditItem'
import Button from '@/components/UI/buttons/Button'
import ButtonWithSellerPhone from '@/components/UI/buttons/ButtonWithSellerPhone'
import Modal from '@/components/UI/modals/Modal'
import { useDeleteItemAndImg } from '@/hooks/items/useDeleteItemAndImg'
import { itemsService } from '@/services/items/items.service'
import { ItemType } from '@/services/items/items.types'
import { QueryKeys } from '@/utils/constants/reactQuery'

interface ItemButtonsProps {
    itemData: ItemType
}

export default function ItemButtons({ itemData }: ItemButtonsProps) {
    const { slug } = useParams<{ slug: string }>()
    const [active, setActive] = useState<boolean>(false)

    const { deleteItem } = useDeleteItemAndImg(slug)

    const { data, isLoading } = useQuery({
        queryKey: [QueryKeys.GET_USER_ADS],
        queryFn: itemsService.getUserItems,
    })

    if (isLoading) return <>Загрузка...</>

    const isCurrentUserItem = data?.data.some(el => el.id === itemData.id)

    const startValue = {
        title: itemData.title,
        description: itemData.description,
        price: itemData.price,
        photos: itemData.images,
    }

    return (
        <>
            {isCurrentUserItem ? (
                <div className="flex w-full flex-col gap-2.5 lg:flex-row">
                    <Button
                        className="w-full lg:w-auto"
                        onClick={() => {
                            setActive(true)
                        }}
                    >
                        Редактировать
                    </Button>
                    <Button
                        className="w-full lg:w-auto"
                        onClick={() => {
                            deleteItem()
                        }}
                    >
                        Снять с публикации
                    </Button>
                </div>
            ) : (
                <ButtonWithSellerPhone number={itemData.user.phone} />
            )}
            <Modal active={active} setActive={setActive}>
                <AddAndEditItem
                    modalTitle="Редактировать объявление"
                    setActive={setActive}
                    startValue={startValue}
                />
            </Modal>
        </>
    )
}
