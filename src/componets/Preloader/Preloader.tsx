import preloader from "../../assets/Bean Eater-1s-200px.gif"
import useStyles from "../Preloader/PreloaderStyle"

const Preloader = () => {
    const s = useStyles ()

    return (
        <div className = {s.wrapper} >
            <div className = {s.imgBlock} >
                <img src = {preloader} />
            </div>
        </div>
    )
}

export default Preloader;