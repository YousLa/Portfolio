import React from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav_logo">
                <img src={Logo} alt="" />
            </a>

            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        {/* HOME */}
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        {/* ABOUT */}
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="icon-user"></i>
                            </a>
                        </li>

                        {/* SKILLS */}
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="icon-badge"></i>
                            </a>
                        </li>

                        {/* PORTFOLIO */}
                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>

                        {/* TESTIMONIALS */}
                        <li className="nav_item">
                            <a href="#testimonials" className="nav_link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>

                        {/* CONTACT */}
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="icon-envelope"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright"> &copy; 2024</span>
            </div>
        </aside>
    )
}

export default Sidebar