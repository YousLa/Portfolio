import React from 'react'
import Linkedin from "../../assets/linkedin.svg"
import Github from "../../assets/github.svg"
import Resume from "../../assets/resume.svg"
import Gmail from "../../assets/gmail.svg"
// import Cv from "../../assets/cv.svg"

const HeaderSocials = () => {
    return (
        <div className="home_socials">
            <a href="" className="home_social-link" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
                {/* <img src={Linkedin} alt="LinkedIn" /> */}
            </a>

            <a href="" className="home_social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
                {/* <img src={Github} alt="Github" /> */}
            </a>

            <a href="" className="home_social-link" target="_blank">
                <i class="fa-regular fa-file-pdf"></i>
                {/* <img src={Resume} alt="Curriculum Vitae" /> */}
            </a>

            <a href="" className="home_social-link" target="_blank">
                <i class="fa-solid fa-at"></i>
                {/* <img src={Gmail} alt="Gmail" /> */}
            </a>
        </div >
    )
}

export default HeaderSocials