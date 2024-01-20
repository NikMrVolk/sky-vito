import BackLink from '@/components/common/BackLink'
import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'
import ProfileAvatar from '@/components/profile/ProfileAvatar'
import ButtonWithSellerPhone from '@/components/UI/buttons/ButtonWithSellerPhone'

import { MAIN_ROUTE } from '@/utils/constants/routes'

interface pageProps {
    params: { slug: string }
}

export default function page({ params }: pageProps) {
    return (
        <BlockWrapper className="mt-7.5 flex flex-col gap-7.5">
            <h5 className="hidden text-4.5xl sm:block">Профиль продавца</h5>
            <BackLink text="Профиль продавца" href={MAIN_ROUTE} />
            <div className="flex flex-col gap-7.5 xs:flex-row-reverse xs:justify-center sm:justify-end">
                <div className="flex flex-col gap-1.5 text-layoutGray">
                    <div className="text-xl font-semibold text-black">
                        Кирилл Матвеев {params.slug}
                    </div>
                    <div>Санкт-Петербург</div>
                    <div>Продает товары с августа 2021</div>
                    <ButtonWithSellerPhone
                        number={89051023445}
                        classes={{ buttonWrapper: 'hidden xs:flex xs:mt-5' }}
                    />
                </div>
                <ProfileAvatar
                    isOther
                    classes={{ wrapper: 'gap-7.5 mb-10', button: 'xs:hidden' }}
                />
            </div>
            <ItemsList
                title="Товары продавца"
                classes={{ title: 'xs:text-center sm:text-start' }}
            />
        </BlockWrapper>
    )
}
