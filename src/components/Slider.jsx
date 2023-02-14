import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import dataSlider from '../data/slider';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from 'react-router-dom';
import {container,item} from "../components/Animation";
import { motion } from 'framer-motion';
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
                {dataSlider.map((item1) => (
                    <SwiperSlide key={item1.id}>
                        <video autoPlay loop muted>
                            <source src={item1.video} />
                        </video>
                        <motion.div className='slider_text' 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        >
                            <motion.h1  animate={{ y: 0 }}
                            initial={{ y: "100%" }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            >{item1.title}</motion.h1>
                            <motion.h4 variants={item}>{item1.descriiption}</motion.h4>
                            <motion.p variants={item}>{item1.note}</motion.p>
                            <Link>View now</Link>
                        </motion.div>
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