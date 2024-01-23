'use client'

import { useQuery } from '@tanstack/react-query'

import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'
import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: [QueryKeys.GET_ADS],
        queryFn: itemsService.getAll,
    })

    if (isLoading) return <div className="text-center text-xl">Загрузка...</div>

    return (
        <BlockWrapper>
            <ItemsList
                title="Объявления"
                classes={{ title: 'mt-7.5 text-2xl sm:text-4.5xl' }}
                items={data?.data}
            />
        </BlockWrapper>
    )
}
