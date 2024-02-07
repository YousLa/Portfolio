import React from 'react';
import "./recommandations.css";
import Data from './Data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Recommandations = () => {
    return (
        <section className="recommandations container section" id='recommandations'>
            <h2 className='section_title'>Recommendations</h2>

            <Swiper
                modules={[Pagination, Navigation]}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                loop={true}

            >
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}

                {Data.map(({ id, image, name, poste, comment, entreprise, lien }) => (
                    <SwiperSlide key={id} className='recommandation_item'>
                        <div>
                            <div className="thumb">
                                <img className='recommantion-avatar' src={image} alt={name} />
                            </div>
                            <h3 className="recommandations_title">{name}</h3>
                            <span className='subtitle'>{poste} chez <a href={lien} target='blank_'>{entreprise}</a></span>
                            <div className='comment'>{comment}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Recommandations;