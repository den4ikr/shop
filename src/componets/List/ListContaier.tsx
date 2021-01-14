import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import { getList } from "../../redux/list-reducer"
import { getCart } from "../../redux/cart-reducer"
import { addToCart } from "../../redux/cart-reducer"
import List from "./List"
import { useEffect } from "react";
import { ListResponseType } from "../../types/types"

type ListContainerPropsType = {
    list: Array <ListResponseType>,
    getList: () => void,
    getCart: () => void,
    addToCart: (productId: string | number) => void,
}

const ListContainer: React.FunctionComponent <ListContainerPropsType> = (props) => {

    useEffect ( () => {
        props.getList ()
        props.getCart ()
    }, [] )
    
    return (
        <List list = {props.list} addToCart = {props.addToCart} />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        list: state.list.list
    }
}

export default connect (mapStateToProps, {getList, getCart, addToCart})(ListContainer);