import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import useStyles from "./HeaderStyle";

const Header: React.FunctionComponent = (props) => {
    const s = useStyles ();
    const cart = useSelector ( (state: AppStateType) => state.cart.cart )

    return (
       <div className = {s.headerWrapper} >
            <div className = {s.row} >
                <div className = {s.menu} >
                    <NavLink to = "/shop" >
                        MAIN
                    </NavLink>
                </div>
                <div className = {s.cart} >
                    <NavLink to = "/cart" >
                        <IconButton aria-label = "Show cart items" color = "inherit" >
                            <Badge badgeContent = {cart.length} color = "secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </NavLink>
                </div>
            </div>
       </div>
    )
}


export default Header;