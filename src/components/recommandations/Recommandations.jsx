import React, { useEffect, useState } from 'react';
import "./recommandations.css";
import Data from './Data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Recommandations = () => {
    const [shuffledData, setShuffledData] = useState([]);
    const isMobile = window.innerWidth <= 900;

    useEffect(() => {
        const shuffled = [...Data].sort(() => Math.random() - 0.5);
        setShuffledData(shuffled);
    }, []);

    return (
        <section className="recommandations container section" id='recommandations'>
            <h2 className='section_title'>Recommendations</h2>

            <Swiper
                modules={[Pagination, Navigation]}
                navigation={!isMobile ? { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' } : false}
                pagination={isMobile ? {
                    dynamicBullets: true,
                    clickable: true
                } : false}
                loop={true}
            >
                {!isMobile ? (
                    <div>
                        <div div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>)
                    :
                    null
                }

                {shuffledData.map(({ id, image, name, poste, comment, entreprise, lien, linkedin }) => (
                    <SwiperSlide key={id} className='recommandation_item'>
                        <div>
                            <div className="thumb">
                                <img className='recommantion-avatar' src={image} alt={name} />
                            </div>
                            <a href={linkedin} target='_blank' rel='noopener noreferrer'>
                                <i className="devicon-linkedin-plain-wordmark icons-recommandations"></i>
                            </a>
                            <h3 className="recommandations_title">{name}</h3>
                            <span className='subtitle'>{poste} chez <a href={lien} target='blank_' rel='noopener noreferrer'>{entreprise}</a></span>
                            <div className='comment'>{comment}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}

export default Recommandations;