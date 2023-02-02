import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Slider from '../components/Slider';
import Ourproduct from '../components/Ourproduct';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import funituredata from '../data/funiture';
import { Link } from 'react-router-dom';
function Home({ handleAddToCart }) {
  const [typeData, setTypeData] = useState(funituredata);
  const [active, setActive] = useState("all");

  const dataCategory = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/ac/1e/f5/ac1ef581b47d1e4133e085221fb6e349.jpg",
      title: "Dining Chair"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/11/31/3d/11313d1a8fa0dcaf46cf5fd23151359e.jpg",
      title: "Table"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/5e/8c/5f/5e8c5f31cf3375dcce5eb9278661fa19.jpg",
      title: "mirror"
    }
  ];
  const dataAbout = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/5d/66/f8/5d66f8a37549f81c9be419ba6986834d.jpg"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/4c/07/31/4c0731518224a406713eeef7baff5f6d.jpg"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/0e/bc/3a/0ebc3aaa951e9ad071b906069fe5f6c0.jpg"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/564x/bb/b4/5d/bbb45d49801cd5e9d6e51e2203249f43.jpg"
    }
  ]
  const filterData = (type) => {
    const filteritem = funituredata.filter((itemdata) => {
      return itemdata.type === type;
    })
    setTypeData(filteritem);
  }
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
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <motion.div className='home'
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <ScrollToTop smooth top="100" />
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
            <div className='introduce_iamge'>
              <img src="https://i.pinimg.com/564x/85/6b/ee/856bee2959e33d62af16c0ca6e1d7d2e.jpg" />
              <h3>LeeXs luxury</h3>
              <div className='border'></div>
            </div>
          </div>
          <div className='introduce_bottom'>
            <div className='introduce_item' data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className='introduce_image'>
                <img src="https://i.pinimg.com/564x/1d/80/a9/1d80a93b5d30ae65b891d971429f28d5.jpg" />
                <p>Combination of many unique styles</p>
                <div className='border'></div>
              </div>
              <p>Combination of many unique styles</p>
            </div>
            <div className='introduce_item' data-aos="fade-up"
              data-aos-duration="3000">
              <div className='introduce_image'>
                <img src="https://i.pinimg.com/564x/2e/0f/79/2e0f798bd11e40ed4699dc6839eb92f5.jpg" />
                <p>Bringing innovation to each product</p>
                <div className='border'></div>
              </div>
              <p>Bringing innovation to each product</p>
            </div>
            <div className='introduce_item' data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className='introduce_image'>
                <img src="https://i.pinimg.com/564x/ca/32/ef/ca32efd88d1d0dd763fa6dfdeb472116.jpg" />
                <p>Always ensure a high quality</p>
                <div className='border'></div>
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
          <div className='about_outstanding' data-aos="fade-up"
            data-aos-easing="easing"
            data-aos-duration="1500">
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
        <div className='sell'>
          <div className='sell_category'>
            <div className='category_text'
              data-aos="fade-right"
              data-aos-offset="300">
              <h3>Shop by category</h3>
              <div className='line'></div>
              <div className='category_amount'>
                <i className="fa fa-cube" aria-hidden="true"></i>
                <p>100+ Unique products</p>
              </div>
              <Link>All category <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
            </div>
            <div className='category_image'>
              {
                dataCategory.map(item => (
                  <div className='category_item' key={item.id} data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src={item.image} />
                    <h3>{item.title}</h3>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='more'>
            <div className='more_item' data-aos="fade-up-right"
              data-aos-offset="420">
              <img src='https://i.pinimg.com/564x/1c/7b/cc/1c7bcc3ebb02ab5ae82a81205636fe73.jpg' />
              <div className='more_item-text'>
                <p>50% off all order</p>
                <h3>Living room</h3>
                <button>Shop now</button>
              </div>
            </div>
            <div className='more_item' data-aos="fade-up-left"
              data-aos-offset="420">
              <img src='https://i.pinimg.com/736x/9d/27/b2/9d27b2f0d0fbf5aea36ca168487ff6a1.jpg' />
              <div className='more_item-text'>
                <p>50% off all order</p>
                <h3>Dining room</h3>
                <button>Shop now</button>
              </div>
            </div>
          </div>
          <div className='hot'>
            <div className='hot_control'>
              <div className="hot_title" data-aos="fade-right" data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h3>Our Products</h3>
                <div className='line'></div>
              </div>
              <div className='hot_control_item' data-aos="fade-down" data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div onClick={() => { setTypeData(funituredata); setActive("all"); }} className={active === "all" ? "item_contol active" : "item_contol "}>All product</div>
                <div onClick={() => { filterData("newmod"); setActive("newmod"); }} className={active === "newmod" ? "item_contol active" : "item_contol "}>Latest product</div>
                <div onClick={() => { filterData("selling"); setActive("selling"); }} className={active === "selling" ? "item_contol active" : "item_contol "}>Top rating</div>
                <div onClick={() => { filterData("discount"); setActive("discount"); }} className={active === "discount" ? "item_contol active" : "item_contol"}>Best seller</div>
                <div className='animation_line line'></div>
              </div>
              <Link to="/menu" data-aos="fade-left" data-aos-offset="300"
                data-aos-easing="ease-in-sine">go to menu<i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
            </div>
            <div className='hot_wrapper' data-aos="fade-up" data-aos-offset="400"
              data-aos-easing="easing">
              {typeData.map(item => (
                <div className='wrapper-item' key={item.id}>
                  <img src={item.image} alt="" className='img_hover' />
                  {item.type === "discount" && <div className='type_item'>{item.type}</div>}
                  {item.type === "selling" && <div className='type_item'>{item.type}</div>}
                  {item.type === "newmod" && <div className='type_item'>{item.type}</div>}
                  <div className='wrapper_control'>
                    <div className='control_list'>
                      <Link className='control_item'>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </Link>
                      <Link className='control_item' to={`/details/${item.id}`}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      </Link>
                      <Link className='control_item'>
                        <i className="fa fa-cart-plus" aria-hidden="true" onClick={()=>handleAddToCart(item)}></i>
                      </Link>
                    </div>
                  </div>
                  <div className='wrapper_description'>
                    <img src={item.rating} alt="" />
                    <h3>{item.title}</h3>
                    {item.type === "discount" ? <div className='pricecalse'><p className='price_old'>${item.price}</p><p className='price_new'>${item.pricesale}</p></div> : <p>${item.price}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='supplise'>
            <div className='supplise_text'>
              <h2>We design digital products</h2>
              <i className="fa fa-cubes" aria-hidden="true"></i>
              <p data-aos="fade-up" data-aos-offset="400"
                data-aos-easing="easing">
                A house with beautiful interior design brings back aesthetic value
                and value for money. When your home is beautifully furnished, it
                will certainly appreciate more when you sell it. Besides,
                everyone wants to live in a beautiful space,
                because it will directly affect the owners psychology.
              </p>
            </div>
            <div className='supplise_image'>
              {
                dataAbout.map(item => (
                  <div className='supplise_item' key={item.id}>
                    <img src={item.image} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Footer />
      </HelmetProvider>
    </motion.div>
  )
}

export default Home