import contactStyles from "./Contact.module.css"
import footerStyles from './FooterGlobal.module.css'
import mailIcon from "../../../assets/MailIcon.svg"

function Contact () {
    return (
        <>
        <div className={`${contactStyles.containerContact} ${footerStyles.cenVert}`}>
            <span className={footerStyles.textFooter}>Contact</span>
            <div className={contactStyles.vl}></div>
  
                <a className={`${contactStyles.contactLink} ${footerStyles.cenVert}`} href="mailto:tpbyoar@gmail.com?subject=Inquiry&body=Salutations..." target="_blank">
                <img className={contactStyles.contactIcon} src={mailIcon.src} />
                <span className={footerStyles.textFooter}>tpbyoar@gmail.com</span>
                </a>



        </div>
        </>
    )
}

export default Contact;