import Header from "../components/Header";
import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link } from "react-router-dom";
import video1 from "../assets/video/video2.mp4";
import Breadcrum from "../components/Breadcrum";
import funituredata from "../data/funiture";
import ScrollToTop from "react-scroll-to-top";
import Pagination from "../components/Pagination";
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
function Menu({cart,handleAddToCart}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [tab, setTab] = useState(funituredata);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tab.slice(indexOfFirstPost, indexOfLastPost);
  const [actie, setActive] = useState(true);
  console.log(cart);
  return (
    <motion.div className="menu"
    inital={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <HelmetProvider>
        <Helmet>
          <title>Menu</title>
        </Helmet>
        <ScrollToTop smooth top="100" />
        <Breadcrum />
        <div className="menu_container">
          <div className="menu_left">
            <div className="menuleft_title">
              <h3>Shop by</h3>
              <div className="line"></div>
            </div>
            <div className="menu_list">
              <div className="menu_wrapper">
                <h3>Manufacturer</h3>
                <ul>
                  <li >
                    Calvin Klein
                    <p>({funituredata.filter(item => item.manufacturer == "Calvin Klein").length})</p>
                  </li>
                  <li >
                    Diesel
                    <p>({funituredata.filter(item => item.manufacturer == "Diesel").length})</p>
                  </li>
                  <li >
                    Polo
                    <p>({funituredata.filter(item => item.manufacturer == "Polo").length})</p>
                  </li>
                  <li >
                    Tommy Hilfiger
                    <p>({funituredata.filter(item => item.manufacturer == "Tommy Hifiger").length})</p>
                  </li>
                </ul>
              </div>
              <div className="menu_wrapper">
                <h3>Category</h3>
                <ul>
                  <li >
                    Chair
                    <p>({funituredata.filter(item => item.category == "chair").length})</p>
                  </li>
                  <li >
                    Table
                    <p>({funituredata.filter(item => item.category == "table").length})</p>
                  </li>
                  <li >
                    Clamp
                    <p>({funituredata.filter(item => item.category == "lamp").length})</p>
                  </li>
                  <li >
                    Mirror
                    <p>({funituredata.filter(item => item.category == "mirror").length})</p>
                  </li>
                  <li >
                    Clock
                    <p>({funituredata.filter(item => item.category == "clock").length})</p>
                  </li>
                </ul>
              </div>
              <div className="menu_wrapper">
                <h3>Price</h3>
                <ul>
                  <li >
                    $0,00 - $2,500
                    <p>({funituredata.filter(item => item.price < 2500).length})</p>
                  </li>
                  <li >
                    $2500 And Above
                    <p>({funituredata.filter(item => item.price > 1500).length})</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rated_category">
              <h3>Top rated</h3>
              <div className="category_list">
                {funituredata.filter(item => item.ratingtext == "5" && item.price >= 3000).map(render => (
                  <div className="category_item" key={render.id}>
                    <img src={render.image} alt="" />
                    <div className="category_text">
                      <img src={render.rating} alt="" />
                      <h2>{render.title}</h2>
                      <p>$ {render.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="menu_right">
            <video autoPlay loop muted>
              <source src={video1} />
            </video>
            <div className="menuright_control">
              <div className="right_icon">
                <div className={actie ? "righticon_item" : "righticon_item active"} onClick={() => setActive(true)}>
                  <i className="fa fa-th" aria-hidden="true"></i>
                </div>
                <div className={actie ? "righticon_item active" : "righticon_item"} onClick={() => setActive(false)}>
                  <i className="fa fa-th-list" aria-hidden="true"></i>
                </div>
              </div>
              <div className="right_sort">
                <h3>Sort by: </h3>
                <select name="sortby" id="sortby">
                  <option value="default">Default</option>
                  <option value="Product Name">Product Name</option>
                  <option value="Price">Price</option>
                  <option value="rating">Rating</option>
                </select>
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
              </div>
            </div>
            <div className="menuright_list">
              {currentPosts.map(item => (
                <div className={actie ? "menuright_item" : "menuright_item active"} key={item.id}>
                  <img src={item.image} />
                  <div className="menuright_des">
                    <img src={item.rating} className={actie ? "image active" : "image"} />
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <div className={actie ? "hide" : "hide active"}>
                      <img src={item.rating} />
                      <p>{item.customerreview.filter(item1 => item.description).length} review</p>
                    </div>
                    <h5 className={actie ? "hide" : "hide active"}>{item.description}</h5>
                    <div className={actie ? "hide" : "hide active"}>
                      <button onClick={()=>handleAddToCart(item)}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                      <button><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                    </div>
                  </div>
                  <div className={actie ? "menuright_item_overlay active" : "menuright_item_overlay"}>
                    <div className="overlay_control">
                      <Link className="control_item">
                        <i onClick={()=>handleAddToCart(item)} className="fa fa-cart-plus" aria-hidden="true"></i>
                      </Link>
                      <Link className="control_item">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </Link>
                      <Link className="control_item" to={`/details/${item.id}`}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={tab.length}
              paginate={paginate}
            />
          </div>
        </div>
        <Footer />
      </HelmetProvider>
    </motion.div>
  )
}

export default Menu