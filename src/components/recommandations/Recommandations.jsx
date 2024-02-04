import React from 'react';
import "./recommandations.css";
import Data from './Data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Recommandations = () => {
    return (
        <section className="recommandations container section" id='recommandations'>
            <h2 className='section_title'>Recommandations</h2>

            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}

            >
                {Data.map(({ id, image, title, poste, comment, entreprise, lien }) => (
                    <SwiperSlide key={id} className='recommandation_item'>
                        <div className="thumb">
                            <img src={image} alt="" />
                        </div>
                        <h3 className="recommandations_title">{title}</h3>
                        <span className='subtitle'>{poste} chez <a href={lien} target='blank_'>{entreprise}</a></span>
                        <div className='comment'>{comment}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Recommandations;