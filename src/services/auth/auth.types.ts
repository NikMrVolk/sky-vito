export interface IUser {
    id?: number
    email: string
    password: string
    confirmedPassword?: string
    name?: string
    surname?: string
    role?: 'admin' | 'user'
    phone?: number
    city?: string
}

export interface ITokens {
    access_token: string
    refresh_token: string
    token_type: string
}
