import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import CartReducer from "./cart-reducer";
import ListReducer from "./list-reducer";

const rootReducer = combineReducers ({
    list: ListReducer,
    cart: CartReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType <RootReducerType>

let store = createStore (rootReducer, applyMiddleware (thunkMiddleware));

export default store;