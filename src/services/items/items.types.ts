export interface ImageType {
    id: number
    ad_id: number
    url: string
}

interface SellerType {
    avatar: string
    city: string
    email: string
    id: number
    name: string
    phone: string
    sells_from: string
}

export interface IComments {
    id: number
    created_on: string
    author: SellerType
    text: string
}

export interface ItemType {
    id: number
    title: string
    description: string
    price: number
    created_on: string
    user_id: number
    images: ImageType[] | []
    user: SellerType
}
