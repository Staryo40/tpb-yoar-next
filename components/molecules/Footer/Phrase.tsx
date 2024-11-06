import phraseStyles from "./Phrase.module.css"
import footerStyles from './FooterGlobal.module.css'

function Phrase () {
    return (
        <>
        <div className={`${footerStyles.textFooter} ${footerStyles.cenVert}`}>
            <span>Made with 🧂 in Indonesia <span className={phraseStyles.flag}>🇮🇩</span></span>
        </div>
        </>
    )
}

export default Phrase;