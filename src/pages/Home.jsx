import React, { useState } from 'react';
import Header from "../components/Header";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Slider from '../components/Slider';
import Ourproduct from '../components/Ourproduct';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../components/Footer';
function Home() {

  const databout = [
    {
      id: 1,
      title: "Free ship",
      icon: <i className="fa fa-truck" aria-hidden="true"></i>,
      description: "Free shipping for orders over $1000 or for customers in Platinum or higher",
    },
    {
      id: 2,
      title: "COD payment",
      icon: <i className="fa fa-credit-card-alt" aria-hidden="true"></i>,
      description: "Support many convenient payment methods for customers with high security",
    },
    {
      id: 3,
      title: " support",
      icon: <i className="fa fa-cog" aria-hidden="true"></i>,
      description: "If the purchase is damaged because the manufacturer is allowed exchange",
    }
  ]

  return (
    <div className='home'>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <ScrollToTop smooth top="100" />
        <Header/>
        <Slider />
        <div className='introduce'>
          <div className='introduce_top'>
            <div className='introduce_banner'>
              <h2>Welcome to LeeX furniture</h2>
              <p>Interior design is a specific
                and highly competitive industry, so
                it requires businesses to have a prominent
                branding strategy to be able to both show
                their own "quality" as well as let customers
                have can easily reach me</p>
            </div>
            <img src="https://i.pinimg.com/564x/85/6b/ee/856bee2959e33d62af16c0ca6e1d7d2e.jpg" />
          </div>
          <div className='introduce_bottom'>
            <div className='introduce_item'>
              <div className='introduce_image'>
                <img src="https://i.pinimg.com/564x/1d/80/a9/1d80a93b5d30ae65b891d971429f28d5.jpg" />
              </div>
              <p>Combination of many unique styles</p>
            </div>
            <div className='introduce_item'>
              <div className='introduce_image'>
                <img src="https://i.pinimg.com/564x/2e/0f/79/2e0f798bd11e40ed4699dc6839eb92f5.jpg" />
              </div>
              <p>Bringing innovation to each product</p>
            </div>
            <div className='introduce_item'>
              <div className='introduce_image'>
                <img src="https://i.pinimg.com/564x/ca/32/ef/ca32efd88d1d0dd763fa6dfdeb472116.jpg" />
              </div>
              <p>Always ensure a high quality</p>
            </div>
          </div>
        </div>
        <div className='about'>
          <div className='about_text'>
            <h1>salient features</h1>
            <i className="fa fa-cubes" aria-hidden="true"></i>
          </div>
          <div className='about_outstanding'>
            {
              databout.map((item) => (
                <div className='about_item' key={item.id}>
                  <div className='about_icon'>
                    {item.icon}
                  </div>
                  <div className='about_note'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button>Learn More</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Ourproduct/>
        <Footer/>
      </HelmetProvider>
    </div>
  )
}

export default Home