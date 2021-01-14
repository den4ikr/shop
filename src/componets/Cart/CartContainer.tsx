import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import { getCart } from "../../redux/cart-reducer"
import { deleteFromCart } from "../../redux/cart-reducer"
import Cart from "./Cart"
import { useEffect } from "react"
import { CartResponseType } from "../../types/types"

type CartContainerPropsType = {
    cart: Array <CartResponseType>,
    subtotal: string,
    getCart: () => void,
    deleteFromCart: (productId: number | string) => void,
}

const CartContainer: React.FunctionComponent <CartContainerPropsType> = (props) => {

    useEffect ( () => {
        props.getCart ()
    }, [] )

    return (
        <Cart cart = {props.cart} deleteFromCart = {props.deleteFromCart} subtotal = {props.subtotal} />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        cart: state.cart.cart,
        subtotal: state.cart.subtotal
    }
}

export default connect (mapStateToProps, {getCart, deleteFromCart} )(CartContainer);