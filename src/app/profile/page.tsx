import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'

export default function Profile() {
    return (
        <BlockWrapper>
            <ItemsList title="Мои товары" classes={{ title: 'mb-7.5' }} />
        </BlockWrapper>
    )
}
