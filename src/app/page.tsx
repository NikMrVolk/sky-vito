import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemsList from '@/components/item/ItemsList'

export default function Home() {
    return (
        <BlockWrapper>
            <ItemsList title="Объявления" classes={{ title: 'text-2xl sm:text-4.5xl' }} />
        </BlockWrapper>
    )
}
