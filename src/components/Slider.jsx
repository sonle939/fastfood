import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import dataSlider from '../data/slider';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from 'react-router-dom';
function Slider() {

    return (
        <div className='slider'>
            <Swiper
                cssMode={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                }}
                centeredSlides={true}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {dataSlider.map((item) => (
                    <SwiperSlide key={item.id}>
                        <video autoPlay loop muted>
                            <source src={item.video} />
                        </video>
                        <div className='slider_text'>
                            <h1>{item.title}</h1>
                            <h4>{item.descriiption}</h4>
                            <p>{item.note}</p>
                            <Link>View now</Link>
                        </div>
                    </SwiperSlide>
                ))}
                <div className='swiper-button-prev prev'>
                    <p>Pr</p>
                    <p>ev</p>
                </div>
                <div className='swiper-button-next next'>
                    <p>ne</p>
                    <p>xt</p>
                </div>
            </Swiper>
        </div>
    )
}

export default Slider