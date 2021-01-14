import ListItem from "./ListItem/ListItem";
import { ListResponseType } from "../../types/types"
import useStyles from "./ListStyle"
import Preloader from "../Preloader/Preloader";

type ListPropsType = {
    list: Array <ListResponseType>,
    addToCart: (productId: string | number) => void,
}

const List: React.FunctionComponent <ListPropsType> = (props) => {
    const s = useStyles ();

    return (
        <div>
            {props.list.length
            ? <div className = {s.row} >
                {props.list && props.list.map (l => {
                
                    return (
                        <ListItem addToCart = {props.addToCart} name = {l.name} description = {l.description} price = {l.price.formatted_with_symbol} id = {l.id} assets = {l.assets} key = {l.id} />
                    )
                })}
            </div>
            : <Preloader />
            }
        </div>
    )
}

export default List