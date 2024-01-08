import React from 'react'
import "./recommandations.css"
import Pic from "../../assets/pic.png"

// Import Swiper core and required modules
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id: 1,
        image: Pic,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment: "I enjoye working with the theme and learn so much. You guys make the process fun an interesting. Good luck ! 👌"
    },
    {
        id: 2,
        image: Pic,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment: "I enjoye working with the theme and learn so much. You guys make the process fun an interesting. Good luck ! 👌"
    }
]

const Recommandations = () => {
    return (
        <section className="recommandations container section" id='recommandations'>
            <h2 className='section_title'>Recommendations</h2>

            <Swiper className="recommandations_container grid">
                {data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="recommandation_item"
                            // install Swiper modules
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                        >
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="recommandations_title">{title}</h3>
                            <span className='subtitle'>{subtitle}</span>
                            <div className='comment'>{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Recommandations