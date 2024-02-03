import React from 'react';
import "./home.css";
// import Avatar from "../../assets/svg/avatar.svg"; 
import Avatar from "../../assets/image/Avatar.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="intro">
                {/* TODO Changer l'image */}
                <img src={Avatar} alt="" className='home_img' />
                <h1 className="home_name">Yousra El Jilali</h1>
                <span className="home_education">I am a Web Developer Junior</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Hire me</a>

                <ScrollDown />
            </div>
            {/* <Shapes /> */}
        </section>
    )
}

export default Home