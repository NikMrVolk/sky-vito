'use client'

import { useQuery } from '@tanstack/react-query'

import IsAuthComponent from '@/components/common/IsAuthComponent'
import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'
import ProfileInfo from '@/components/profile/ProfileInfo'
import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

export default function Profile() {
    const { data, isLoading } = useQuery({
        queryKey: [QueryKeys.GET_USER_ADS],
        queryFn: itemsService.getUserItems,
    })

    return (
        <BlockWrapper>
            <IsAuthComponent />
            <ProfileInfo />
            {isLoading ? (
                <>Загрузка...</>
            ) : (
                <ItemsList title="Мои товары" items={data?.data} classes={{ title: 'mb-7.5' }} />
            )}
        </BlockWrapper>
    )
}
