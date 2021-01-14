import { CartResponseType } from "../../../types/types";
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import useStyle from "./CartItemStyle";

const CartItem: React.FunctionComponent <CartResponseType> = (props) => {
    const s = useStyle ()

    return (
        <Card className={s.root} key={props.id} >
            <CardMedia className={s.media} image={props.media.source} />
            <CardContent>
                <div className={s.cardContent} >
                    <Typography variant="h5" gutterBottom >
                        {props.name}
                    </Typography>
                    <Typography variant="h5" >
                        {props.price.formatted_with_symbol}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={s.cardActions} >
                <IconButton area-label="Delete from cart" >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CartItem;