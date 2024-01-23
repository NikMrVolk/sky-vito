'use client'

import { useQuery } from '@tanstack/react-query'

import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemBaseInfo from '@/components/item/page/ItemBaseInfo'
import ItemPhotos from '@/components/item/page/ItemPhotos'
import Button from '@/components/UI/buttons/Button'
import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

export default function ItemPage({ params }: { params: { slug: string } }) {
    const { data, isLoading } = useQuery({
        queryKey: [QueryKeys.GET_ONE_AD],
        queryFn: () => itemsService.getOne(params.slug),
    })

    const { data: comments } = useQuery({
        queryKey: [QueryKeys.GET_ALL_COMMENTS],
        queryFn: itemsService.getAllComments,
    })

    if (isLoading) return <div className="text-center text-xl">Загрузка...</div>

    return (
        <BlockWrapper className="flex flex-col gap-7.5 overflow-x-hidden sm:overflow-x-visible">
            <div className="flex flex-col gap-7.5 sm:flex-row xl:gap-15">
                <ItemPhotos images={data?.data.images} />
                <div className="flex flex-col gap-7.5">
                    {data?.data && comments?.data && (
                        <ItemBaseInfo
                            title={data?.data.title}
                            createdOn={data?.data.created_on}
                            city={data?.data.user.city}
                            price={data?.data.price}
                            comments={comments?.data}
                        />
                    )}
                    <div className="flex w-full flex-col gap-2.5 lg:flex-row">
                        <Button className="w-full lg:w-auto">Редактировать</Button>
                        <Button className="w-full lg:w-auto">Снять с публикации</Button>
                    </div>
                    <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-layoutGray/30" />
                        <div>
                            <div className="text-lg text-layoutBlue lg:text-lg">Антон</div>
                            <div className="text-sm text-layoutGray lg:text-base">
                                Продаёт товары с {data?.data.user.sells_from}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-20 flex flex-col gap-3.5 sm:mb-15">
                <div className="bold text-lg font-semibold lg:text-3.5xl lg:font-medium">
                    Описание товара
                </div>
                <p className="text-sm sm:max-w-200 lg:text-base">{data?.data.description}</p>
            </div>
        </BlockWrapper>
    )
}
