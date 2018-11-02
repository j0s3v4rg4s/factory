export interface ActionsType<T= Object> {
    type: string
    payload: T,
    error?: boolean
    meta?: any
}
