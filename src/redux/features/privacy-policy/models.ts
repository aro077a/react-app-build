export interface PrivacyState{
    privacy: privacyType[] |  any
    loading?: boolean
    errors?: string
}

export type privacyType = {
    id: number | string
    title: string
    description: string


}