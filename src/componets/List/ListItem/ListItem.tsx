import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core"
import {AddShoppingCart} from "@material-ui/icons"
import useStyles from "../ListStyle"

type ListItemPropsType = {
    name: string,
    description: string,
    price: any,
    id: any,
    assets: {
        url: string,
    },
    addToCart: (productId: string | number) => void
}

const ListItem: React.FunctionComponent <ListItemPropsType> = (props) => {
    const s = useStyles ()
    //@ts-ignore
    let imageUrl = props.assets[0].url

    const addProductHandler = () => {
        props.addToCart (props.id)
    }

    return (
        <Card className={s.root} key={props.id} >
            <CardMedia className={s.media} image={imageUrl} />
            <CardContent>
                <div className={s.cardContent} >
                    <Typography variant="h5" gutterBottom >
                        {props.name}
                    </Typography>
                    <Typography variant="h5" >
                        {props.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: props.description }} variant="body1" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={s.cardActions} >
                <IconButton area-label="Add to cart" onClick = { addProductHandler } >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ListItem;