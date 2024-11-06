import HomeIcon from "../../../assets/HomeButton.svg"
import homelogoStyles from "./HomeLogo.module.css"

function HomeLogo () {
    return (
        <div className={homelogoStyles.containerLogo}>
            <a href="/home">
            <img src={HomeIcon.src} />
            {/* {HomeIcon} */}
            </a>
        </div>
    )
}

export default HomeLogo;