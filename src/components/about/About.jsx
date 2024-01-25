import React from 'react'
import "./about.css"
import Avatar from "../../assets/svg/avatar.svg"
import AboutBox from './AboutBox'
import CV from '../../assets/doc/CV-Yousra-El-Jilali.pdf'

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section_title">A propos de moi</h2>

            <div className="about_container grid">
                <img src={Avatar} alt="" className="about_img" />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">Je m'appelle Yousra El Jilali, Web Developer Junior Bruxelles, Belgique. Prête à relever les défis !</p>
                        <a href={CV} className="btn" target="_blank">Télécharger mon CV</a>
                    </div>

                    <div className="about_skills grid">
                        {/* HTML/CSS */}
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">HTML/CSS</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage html_css"></span>
                            </div>
                        </div>


                        {/* JAVASCRIPT */}

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_number">80%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage javascript"></span>
                            </div>
                        </div>


                        {/* PHP */}

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">PHP</h3>
                                <span className="skills_number">75%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage php"></span>
                            </div>
                        </div>


                        {/* DESIGN */}

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">DESIGN</h3>
                                <span className="skills_number">60%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage design"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About