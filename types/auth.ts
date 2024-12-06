export type UserType = {
    id: number,
    username: string,
    telephone?: number,
    email?: string,
    password: string,
    avatar?: string
}

export type LogInDataType = {
    username: string,
    password: string,
}