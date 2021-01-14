import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import { deleteFromCart, getCart, updateCartQ } from "../../redux/cart-reducer"
import Cart from "./Cart"
import { useEffect } from "react"
import { CartResponseType } from "../../types/types"

type CartContainerPropsType = {
    cart: Array <CartResponseType>,
    subtotal: string,
    getCart: () => void,
    deleteFromCart: (productId: number | string) => void,
    updateCartQ: (productId: string, quantity: number) => void,
}

const CartContainer: React.FunctionComponent <CartContainerPropsType> = (props) => {

    useEffect ( () => {
        props.getCart ()
    }, [] )

    return (
        <Cart cart = {props.cart} deleteFromCart = {props.deleteFromCart} subtotal = {props.subtotal} updateCartQ = {props.updateCartQ} />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        cart: state.cart.cart,
        subtotal: state.cart.subtotal
    }
}

export default connect (mapStateToProps, {getCart, deleteFromCart, updateCartQ} )(CartContainer);