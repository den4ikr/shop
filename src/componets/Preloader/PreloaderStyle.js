import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles ({
    wrapper: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: 'center',
    },
    imgBlock: {
        position: "relative",
        paddingTop: "100px",
        
    }
})

export default useStyles;