import React from 'react';
import "./home.css";
import Avatar from "../../assets/svg/avatar.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="intro">
                <img src={Avatar} alt="" className='home_img' />
                <h1 className="home_name">Yousra El Jilali</h1>
                <span className="home_education">Je suis Web Developer Junior</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Engagez-moi</a>

                <ScrollDown />
            </div>
            {/* <Shapes /> */}
        </section>
    )
}

export default Home