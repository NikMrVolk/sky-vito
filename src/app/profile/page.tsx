import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'
import ProfileInfo from '@/components/profile/ProfileInfo'

export default function Profile() {
    return (
        <BlockWrapper>
            <ProfileInfo />
            <ItemsList title="Мои товары" classes={{ title: 'mb-7.5' }} />
        </BlockWrapper>
    )
}
