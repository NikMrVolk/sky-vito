import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemCard from '@/components/item/ItemCard'
import { itemsMock } from '@/utils/mock/items'

export default function Home() {
    return (
        <BlockWrapper>
            <h1>work</h1>
            <br />
            <div className="flex flex-wrap items-start justify-center gap-x-2.5 gap-y-10 pb-14 sm:pb-0">
                {itemsMock.map(el => (
                    <ItemCard
                        key={el.id}
                        id={el.id.toString()}
                        imgLink={el.imgLink}
                        itemName={el.name}
                        created={el.created}
                        city={el.city}
                    />
                ))}
            </div>
        </BlockWrapper>
    )
}
