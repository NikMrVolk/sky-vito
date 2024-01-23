import SellerPage from '@/components/seller/SellerPage'

interface pageProps {
    params: { slug: string }
}

export default function page({ params }: pageProps) {
    return <SellerPage slug={params.slug} />
}
