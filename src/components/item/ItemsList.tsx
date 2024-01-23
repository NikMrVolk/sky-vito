import ItemCard from './ItemCard'

import { cn } from '@/lib/className'
import { ItemType } from '@/services/items/items.types'

interface ItemsListProps {
    title: string
    items?: ItemType[]
    classes?: { blockWrapper?: string; cardWrapper?: string; title?: string }
}

export default function ItemsList({
    title,
    items,
    classes = { blockWrapper: '', cardWrapper: '', title: '' },
}: ItemsListProps) {
    return (
        <div className={cn('', classes.blockWrapper)}>
            <h3 className={cn('mb-5 text-lg font-medium sm:text-3.5xl', classes.title)}>{title}</h3>
            <div
                className={cn(
                    'flex flex-wrap items-start justify-center gap-x-2.5 gap-y-2.5 pb-20 sm:gap-y-10',
                    classes.cardWrapper,
                )}
            >
                {items?.length ? (
                    items.map(el => (
                        <ItemCard
                            key={el.id}
                            id={el.id.toString()}
                            imgLink={el.images[0]?.url ?? ''}
                            itemName={el.title}
                            created={el.created_on}
                            city={el.user.city}
                            price={el.price}
                        />
                    ))
                ) : (
                    <>Список пуст</>
                )}
            </div>
        </div>
    )
}
