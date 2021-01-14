import {createUseStyles} from 'react-jss'

const useStyles  = createUseStyles ({
    headerWrapper: {
        maxWidth: "1300px",
        margin: "0 auto",
        backgroundColor: "black",
    },
    row: {
        display: "flex",
        justifyContent: 'space-between',
        height: "100px",
        alignItems: 'center',
    },
    menu: {
        paddingLeft: "10px",
    },
    cart: {
        paddingRight: "10px",
    }
})

export default useStyles;