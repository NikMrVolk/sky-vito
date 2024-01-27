'use client'

import { useQuery } from '@tanstack/react-query'

import IsAuthComponent from '@/components/common/IsAuthComponent'
import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'
import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'
import ProfileSettings from '@/components/profile/ProfileSettings'

export default function Profile() {
    const { data, isLoading } = useQuery({
        queryKey: [QueryKeys.GET_USER_ADS],
        queryFn: itemsService.getUserItems,
    })

    //temporarily
    if (isLoading) return <div className="text-center">Загрузка...</div>

    return (
        <BlockWrapper>
            <IsAuthComponent />
            <ProfileSettings blockTitle="Настройки профиля" />
            {isLoading ? (
                <div className="text-center">Загрузка...</div>
            ) : (
                <ItemsList title="Мои товары" items={data?.data} classes={{ title: 'mb-7.5' }} />
            )}
        </BlockWrapper>
    )
}
