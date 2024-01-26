export interface ChangeUserDataRequest {
    city: string
    email: string
    name: string
    surname: string
    phone: string
    role: string
}

export interface UserType extends ChangeUserDataRequest {
    id: number
    avatar: string
    sells_from: string
}
