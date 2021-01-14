import {makeStyles} from "@material-ui/core/styles";

export default makeStyles ( () => ({
    row: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'space-around',  
    },
    root: {
        width: "350px",
        marginTop: "100px",
    },
    media: {
        height: 0,
        paddingTop: "68.25%",
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttonsRow: {
        display: "flex",
        justifyContent: "space-between",
    },
    subButtonsRow: {
        display: 'flex',
        alignItems: 'center',
        
    },
}) )