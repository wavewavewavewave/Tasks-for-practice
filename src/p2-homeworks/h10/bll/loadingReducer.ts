const LOADING = 'IS_LOADING';

type initStateType = {
    isLoading: boolean
}
const initState: initStateType = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: LoadingReducerType): initStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export type LoadingReducerType = LoadingACType

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'IS_LOADING',
        isLoading,
    } as const
} // fix any