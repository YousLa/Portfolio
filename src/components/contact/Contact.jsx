import React from 'react'
import "./contact.css"
import FooterSocials from './FooterSocials'

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">Contact</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk about everything !</h3>

                    <p className="contact_details">Don't like forms ? Send an email. 👌</p>

                    <FooterSocials />
                </div>


            </div>
        </section>)
}

export default Contact