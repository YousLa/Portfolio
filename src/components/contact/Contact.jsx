import React from 'react'
import "./contact.css"
import FooterSocials from './FooterSocials'

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">Contact</h2>

            <div className="contact_container">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk !</h3>

                    <p className="contact_details"> Feeling adventurous ? Dive into my LinkedIn, explore my gitHub, or simply drop me an email. Let's make this networking thin fun !</p>
                    <p className="contact_details">Want to know more ? Download my resume.</p>

                    <FooterSocials />
                </div>


            </div>
        </section>)
}

export default Contact