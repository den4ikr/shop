import { AppStateType } from './redux-store';
import { ListResponseType } from './../types/types';
import { commerce } from "../lib/commerce";
import { ThunkAction } from 'redux-thunk';

const LIST_SET_LIST = "LIST_SET_LIST"

const initialState = {
    list: [] as Array <ListResponseType>
}

type InitialStateType = typeof initialState

const ListReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case LIST_SET_LIST:
            return { ...state, list: action.list }
        default:
            return state;
    }
}

type ActionsTypes = SetListType

export const setList = (list: Array <ListResponseType>): SetListType => ( { type: LIST_SET_LIST, list } as const )
type SetListType = {
    list: Array <ListResponseType>,
    type: typeof LIST_SET_LIST
}

type ThunkType = ThunkAction <Promise <void>, AppStateType, unknown, ActionsTypes>

export const getList = (): ThunkType => async (dispatch) => {
    const response = await commerce.products.list ();
    dispatch ( setList (response.data) )
}

export default ListReducer;