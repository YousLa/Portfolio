import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';
import ReactModal from 'react-modal';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <section className="work container section" id="project">
            <h2 className="section_title">Projects</h2>

            <div className="work_filters">
                <span className="work_item" onClick={() => setItems(Menu)}>All</span>
                <span className="work_item" onClick={() => filterItem("HTML")}>HTML</span>
                <span className="work_item" onClick={() => filterItem("JavaScript")}>JavaScript</span>
                <span className="work_item " onClick={() => filterItem("PHP")}>PHP</span>
                <span className="work_item" onClick={() => filterItem("WordPress")}>WordPress</span>
                <span className="work_item" onClick={() => filterItem("React")}>React</span>
                <span className="work_item" onClick={() => filterItem("NodeJS")}>NodeJS</span>
            </div>

            <div className="work_container grid">
                {items.map((elem) => {
                    const { id, image, video, title, category, link } = elem;
                    return (
                        <div className="work_card" key={id}>
                            <div className="work_thumbnail">
                                <img src={image} alt={title} className="work_img" />
                                <div className="work_mask"></div>
                            </div>

                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{title}</h3>
                            {/* <button className="work_button" onClick={() => handleOpenModal(elem)}>
                                <i className="fa-solid fa-plus"></i>
                            </button> */}
                            <a href={link} className="work_button" target='blank_' rel='noopener noreferrer'>
                                <i className="icon-link work_button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
            {/* TODO : Scroll back block | Card */}
            {/* <ReactModal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                contentLabel="Modal Content"
            >
                <div>

                    {selectedItem && (
                        <>
                            {selectedItem.video ? (
                                <video className='modal-media' src={selectedItem.video} autoPlay loop></video>
                            ) : (
                                <img className='modal-media' src={selectedItem.image} alt={selectedItem.title} />
                            )}
                        </>
                    )}
                </div>
                <button onClick={handleCloseModal}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </ReactModal> */}
        </section>
    )
}

export default Portfolio;