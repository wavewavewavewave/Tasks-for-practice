import {UserType} from "../HW8";

export type SortPeopleActionType = {
    type: 'sort',
    payload: string
}
export type CheckPeopleActionType = {
    type: 'check'
    payload: number
}

let initialState: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]


export const homeWorkReducer = (state: Array<UserType> = initialState, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            state.sort((a, b) => a.name > b.name ? 1 : 1)
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default:
            return state
    }
}

export type ActionsType = SortPeopleActionType | CheckPeopleActionType

export const SortPeopleAC = (payload: string): SortPeopleActionType => {
    return {
        type: 'sort',
        payload,
    }
}
export const CheckPeopleAC = (payload: number): CheckPeopleActionType => {
    return {
        type: "check",
        payload,
    }
}
