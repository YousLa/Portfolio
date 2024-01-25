import React from 'react'
import CV from "../../assets/doc/CV-Yousra-El-Jilali.pdf"

const HeaderSocials = () => {
    return (
        <div className="home_socials">
            <a href="https://www.linkedin.com/in/el-jilali-yousra/" className="home_social-link" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://github.com/YousLa" className="home_social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href={CV} className="home_social-link" target="_blank">
                <i class="fa-regular fa-file-pdf"></i>
            </a>

        </div >
    )
}

export default HeaderSocials