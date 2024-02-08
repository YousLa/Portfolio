import React from 'react'
import CV from "../../assets/doc/CV-Yousra-El-Jilali.pdf"

const HeaderSocials = () => {
    return (
        <div className="home_socials">

            <a href="https://www.linkedin.com/in/el-jilali-yousra/" className="home_social-link" target="_blank" rel='noopener noreferrer'>
                <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://github.com/YousLa" className="home_social-link" target="_blank" rel='noopener noreferrer'>
                <i className="fa-brands fa-github"></i>
            </a>

            <a href={CV} className="home_social-link" target="_blank" rel='noopener noreferrer'>
                <i className="fa-regular fa-file-pdf"></i>
            </a>

            <a onClick={() => window.location = 'mailto:eljilaliyousra@hotmail.com'} className="home_social-link" target="_blank" rel='noopener noreferrer'>
                <i className="fa-solid fa-at"></i>
            </a>

        </div >
    )
}

export default HeaderSocials