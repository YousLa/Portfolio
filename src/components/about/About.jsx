import React from 'react'
import "./about.css"
import CV from '../../assets/doc/CV-Yousra-El-Jilali.pdf'

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section_title">About me</h2>

            <div className="about_container">


                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">Hey there! I'm Yousra El Jilali, a 27-year-old adventurer based in the vibrant city of Brussels, Belgium. I've always been drawn to the endless possibilities that technology offers, which led me to dive headfirst into the world of development.</p>
                        <p className="about_description">By day, you'll find me honing my skills in front-end development at Interface3, where I'm learning to craft beautiful and user-friendly interfaces that bring ideas to life. At night, I'm immersed in my first year of Computer Science studies at Ephec, where I'm eagerly absorbing knowledge like a sponge.</p>

                    </div>

                    <div className="about_skills">
                        <div className='intro_skills'>
                            <p className="about_description">My journey in the world of technology has been a thrilling ride so far, filled with challenges, triumphs, and countless lines of code. Along the way, I've dabbled in various technologies such as :</p>
                        </div>
                        <div className='icons_skills'>

                            <i class="devicon-html5-plain colored"></i>

                            <i class="devicon-css3-plain colored"></i>

                            <i class="devicon-sass-original colored"></i>

                            <i class="devicon-bootstrap-plain colored"></i>


                            <i class="devicon-tailwindcss-plain colored"></i>

                            <i class="devicon-javascript-plain colored"></i>

                            <i class="devicon-mysql-plain colored"></i>

                            <i class="devicon-php-plain colored"></i>

                            <i class="devicon-wordpress-plain colored"></i>

                            <i class="devicon-nodejs-plain colored"></i>

                            <i class="devicon-express-original colored"></i>

                            <i class="devicon-mongodb-plain colored"></i>

                            <i class="devicon-react-original colored"></i>

                            <i class="devicon-java-plain colored"></i>

                            <i class="devicon-csharp-plain colored"></i>

                            <i class="devicon-figma-plain colored"></i>

                            <i class="devicon-canva-original colored"></i>

                            <i class="devicon-illustrator-line colored"></i>

                            <i class="devicon-photoshop-line colored"></i>

                            <i class="devicon-xd-line colored"></i>

                            <i class="devicon-git-plain colored"></i>

                            <i class="devicon-github-original colored"></i>


                        </div>
                    </div>
                    <div className='container_download-resume'>
                        <a href={CV} className="btn" target="_blank">Download my resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About