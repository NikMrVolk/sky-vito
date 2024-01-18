interface ItemPageProps {
    params: { slug: string }
}

export default function ItemPage({ params }: ItemPageProps) {
    return <div>item {params.slug}</div>
}
