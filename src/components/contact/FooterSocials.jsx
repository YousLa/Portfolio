import React from 'react'
import CV from "../../assets/doc/CV-Yousra-El-Jilali.pdf"

const FooterSocials = () => {
    return (
        <div className="footer_socials">

            <a href="https://www.linkedin.com/in/el-jilali-yousra/" className="footer_social-link" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://github.com/YousLa" className="footer_social-link" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href={CV} className="footer_social-link" target="_blank">
                <i className="fa-regular fa-file-pdf"></i>
            </a>

            <a onClick={() => window.location = 'mailto:eljilaliyousra@hotmail.com'} className="footer_social-link" target="_blank">
                <i className="fa-solid fa-at"></i>
            </a>

        </div >
    )
}

export default FooterSocials