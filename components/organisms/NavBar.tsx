import sytles from "./NavBar.module.css"
import HomeLogo from "../molecules/NavBar/HomeLogo"
import SearchBar from "../molecules/NavBar/SearchBar"
import MenuBar from "../molecules/NavBar/MenuBar"
import LightDarkSwitch from "../molecules/NavBar/LightDarkSwitch"

function NavBar () {
    return (
        <>
        <div className={sytles.navigation}>
            <HomeLogo />
            <SearchBar />
            <MenuBar />
            <LightDarkSwitch />
        </div>
        </>
    )
}

export default NavBar;