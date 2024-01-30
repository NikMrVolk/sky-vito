import create from 'zustand'

type UseSearchStateType = {
    search: string
}
type UseSearchDispatchType = {
    setSearchState: (Search: Partial<UseSearchStateType>) => void
}
type UseSearchStoreType = UseSearchStateType & UseSearchDispatchType

const initialState: UseSearchStateType = {
    search: '',
}

const useSearchStore = create<UseSearchStoreType>(set => ({
    ...initialState,

    setSearchState: state => {
        set(state)
    },
}))

export default useSearchStore
