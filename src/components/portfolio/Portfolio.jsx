import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    return (
        <section className="work container section" id="work">
            <h2 className="section_title">Projets</h2>

            <div className="work_filters">
                <span className="work_item">Tout</span>
                <span className="work_item">JavaScript</span>
                <span className="work_item">PHP</span>
                <span className="work_item">WordPress</span>
                <span className="work_item">React</span>
                <span className="work_item">NodeJS</span>
            </div>

            <div className="work_container grid">
                {items.map((elem) => {
                    const { id, image, title, category } = elem;
                    return (
                        <div className="work_card" key={id}>
                            <div className="work_thumbnail">
                                <img src={image} alt="" className="work_img" />
                                <div className="work_mask"></div>
                            </div>

                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{title}</h3>
                            <a href="" className="work_button">
                                <i className="icon-link work_button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio