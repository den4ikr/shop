import { CartResponseType } from './../types/types';
import { AppStateType } from './redux-store';
import { commerce } from "../lib/commerce";
import { ThunkAction } from 'redux-thunk';

const CART_SET_CART = "CART_SET_CART"
const CART_SET_SUBTOTAL = "CART_SET_SUBTOTAL"

let initialState = {
    cart: [] as Array <CartResponseType>,
    subtotal: "0",
}

type InitialStateType = typeof initialState

const CartReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case CART_SET_CART:
            return { ...state, cart: action.cart }
        case CART_SET_SUBTOTAL:
            return { ...state, subtotal: action.subtotal }
        default:
            return state;
    }
}

type PropertiesType <T> = T extends { [key: string]: infer U } ? U : never
type ActionsTypes = ReturnType <PropertiesType <typeof actions> >

const actions = {
    setCart: (cart: Array <CartResponseType>)  => ( { type: CART_SET_CART, cart } as const ),
    setSubtotal: (subtotal: string) => ( { type: CART_SET_SUBTOTAL, subtotal } as const ),
}


type ThunkType = ThunkAction <Promise <void>, AppStateType, unknown, ActionsTypes>

export const getCart = (): ThunkType => async (dispatch) => {
    const response = await commerce.cart.retrieve ()
    dispatch (actions.setCart (response.line_items) )
    dispatch ( actions.setSubtotal (response.subtotal.formatted_with_symbol) )
}

export const addToCart = (productId: any): ThunkType => async (dispatch) => {
    const response = await commerce.cart.add (productId)
    dispatch ( actions.setCart (response.cart.line_items) )
}

export const deleteFromCart = (productId: any): ThunkType => async (dispatch) => {
    const response = await commerce.cart.remove (productId)
    dispatch ( actions.setCart (response.cart.line_items) )
    dispatch ( actions.setSubtotal (response.cart.subtotal.formatted_with_symbol) )
}

export default CartReducer;