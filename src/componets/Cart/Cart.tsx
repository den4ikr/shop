import { CartResponseType } from "../../types/types";
import {Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import useStyle from "./CartItem/CartItemStyle"

type CartPropsType = {
    cart: Array <CartResponseType>,
    subtotal: string,
    deleteFromCart: (productId: number | string) => void,
    updateCartQ: (productId: string, quantity: number) => void,
}

const Cart: React.FunctionComponent <CartPropsType> = (props) => {  
    const s = useStyle ()

    return (
        <div>
            {props.cart.length
                ?   <div>
                        <div style = {{ display: "flex", flexWrap: "wrap", justifyContent: 'space-around', }} >
                            {props.cart.map (c => {            
                                return (
                                    <Card className={s.root} key={c.id} >
                                        <CardMedia className={s.media} image={c.media.source} />
                                        <CardContent>
                                            <div className={s.cardContent} >
                                                <Typography variant="h5" gutterBottom >
                                                    {c.name}
                                                </Typography>
                                                <Typography variant="h5" >
                                                    {c.price.formatted_with_symbol}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                        <CardActions disableSpacing className={s.cardActions} > 
                                            <div className = {s.subButtonsRow} >
                                                <Button onClick = { () => props.updateCartQ (c.id, c.quantity - 1) } type = "button" size = "small" >-</Button>
                                                <Typography>
                                                    {c.quantity}
                                                </Typography>
                                                <Button onClick = { () => props.updateCartQ (c.id, c.quantity + 1) } type = "button" size = "small" >+</Button>
                                            </div>
                                            <IconButton area-label="Add to cart" onClick = { () => props.deleteFromCart (c.id) } >
                                                <DeleteIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                )
                            })}
                        </div>
                        <div style = {{ fontSize: "35px", paddingTop: "50px", paddingLeft: "15px" ,}} >
                            Subtotal: {props.subtotal}
                        </div>
                </div>
                :   <div>
                        <div style = {{ fontSize: "55px", textAlign: "center", paddingTop: "50px" ,}} >
                            Your cart is empty ;)
                        </div>
                    </div>
            }
        </div>
    )
}

export default Cart;