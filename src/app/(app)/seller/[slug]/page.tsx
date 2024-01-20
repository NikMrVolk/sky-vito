import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'
import ProfileAvatar from '@/components/profile/ProfileAvatar'

interface pageProps {
    params: { slug: string }
}

export default function page({ params }: pageProps) {
    return (
        <BlockWrapper className="mt-7.5 flex flex-col gap-7.5">
            <h5 className="hidden text-4.5xl sm:block">Профиль продавца</h5>
            <ProfileAvatar isOther classes={{ wrapper: 'hidden sm:flex', button: 'hidden' }} />
            <div className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-1.5 text-layoutGray">
                    <div className="text-xl font-semibold text-black">
                        Кирилл Матвеев {params.slug}
                    </div>
                    <div>Санкт-Петербург</div>
                    <div>Продает товары с августа 2021</div>
                </div>
                <ProfileAvatar
                    isOther
                    classes={{ wrapper: 'gap-7.5 mb-10', photo: 'sm: hidden' }}
                />
            </div>
            <ItemsList title="Товары продавца" />
        </BlockWrapper>
    )
}
