import copyrigthStyles from "./Copyright.module.css"
import footerStyles from './FooterGlobal.module.css'

function Copyright () {
    return (
        <>
        <div className={`${copyrigthStyles.containerCopyright} ${footerStyles.cenVert} ${footerStyles.textFooter}`}>
            <span>Copyright @ 2024 TPB YOAR</span>
        </div>
        </>
    )
}

export default Copyright;