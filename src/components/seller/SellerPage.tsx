'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import BackLink from '@/components/common/BackTextWithCross'
import IsAuthComponent from '@/components/common/IsAuthComponent'
import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'
import SellerInfo from '@/components/seller/SellerInfo'
import { itemsService } from '@/services/items/items.service'
import { userService } from '@/services/user/user.service'
import { QueryKeys } from '@/utils/constants/reactQuery'
import { MAIN_ROUTE, PROFILE_ROUTE } from '@/utils/constants/routes'

interface SellerPageProps {
    slug: string
}

export default function SellerPage({ slug }: SellerPageProps) {
    const router = useRouter()

    const { data: currentUser } = useQuery({
        queryKey: [QueryKeys.GET_CURRENT_USER],
        queryFn: () => userService.getCurrent(),
    })

    const { data, isLoading } = useQuery({
        queryKey: [QueryKeys.GET_ALL_USERS],
        queryFn: userService.getAll,
    })

    const { data: items } = useQuery({
        queryKey: [QueryKeys.GET_ADS],
        queryFn: itemsService.getAll,
    })

    if (isLoading) return <>Loading...</>

    if (currentUser?.id === +slug) router.push(PROFILE_ROUTE)

    const currentSeller = data?.find(el => el.id === +slug)
    const currentSellerItems = items?.data.filter(el => el.user_id === +slug)

    return (
        <BlockWrapper className="mt-7.5 flex flex-col gap-7.5">
            <IsAuthComponent />
            <h5 className="hidden text-4.5xl sm:block">Профиль продавца</h5>
            <Link href={MAIN_ROUTE}>
                <BackLink text="Профиль продавца" />
            </Link>
            <SellerInfo slug={slug} curentSeller={currentSeller} />
            <ItemsList
                title="Товары продавца"
                classes={{ title: 'xs:text-center sm:text-start' }}
                items={currentSellerItems}
            />
        </BlockWrapper>
    )
}
