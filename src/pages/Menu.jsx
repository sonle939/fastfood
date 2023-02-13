
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link } from "react-router-dom";
import video1 from "../assets/video/video2.mp4";
import Breadcrum from "../components/Breadcrum";
import funituredata from "../data/funiture";
import ScrollToTop from "react-scroll-to-top";
import Pagination from "../components/Pagination";
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading';
import manufacturer from '../data/Manufacturer';
import category from '../data/Category';
import price from '../data/Price';
function Menu({ handleAddToCart }) {
  const notify = () => toast('👏🏿 The product was added to your cart! !', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const [tab, setTab] = useState(funituredata);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tab.slice(indexOfFirstPost, indexOfLastPost);
  const [control, setControl] = useState(currentPosts);
  const [actie, setActive] = useState(true);
  const [arrange, setArrange] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const initFilter = {
    manufacturer: [],
    category: [],
    price: []
  };
  const [filter, setFilter] = useState(initFilter);
  const sortPrice = () => {
    if (arrange == true) {
      const sorrt = tab.sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      }).slice(indexOfFirstPost, indexOfLastPost);
      setControl(sorrt);
    } else if (arrange == false) {
      const sorrt = tab.sort((a, b) => {
        return a.price < b.price ? 1 : -1;
      }).slice(indexOfFirstPost, indexOfLastPost);
      setControl(sorrt);
    }
  };
  useEffect(() => {
    sortPrice();
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 4000);
  }, [currentPage, postsPerPage, currentPage]);
  const filterType = (typepro) => {
    const filteraa = tab.filter(item => item.manufacturer == typepro).slice(indexOfFirstPost, indexOfLastPost);
    setControl(filteraa);
    console.log(filteraa);
  }
  const filterProduct = (typepro) => {
    const filteraa = tab.filter(item => item.category == typepro).slice(indexOfFirstPost, indexOfLastPost);
    setControl(filteraa);
    console.log(filteraa);
  }
  const filterPrice = (typepro) => {
    if (typepro < 2500) {
      const filteraa = tab.filter(item => item.price < typepro).slice(indexOfFirstPost, indexOfLastPost);
      setControl(filteraa);
    } else if (typepro > 2500) {
      const filteraa = tab.filter(item => item.price > typepro).slice(indexOfFirstPost, indexOfLastPost);
      setControl(filteraa);
    }
  }
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "manufacturer":
          setFilter({ ...filter, manufacturer: [...filter.manufacturer, item.manufacturer] })
          break
        case "category":
          setFilter({ ...filter, category: [...filter.category, item.category] })
          break
        case "price":
          setFilter({ ...filter, price: [...filter.price, item.price] })
          break
        default:
      }
    } else {
      switch (type) {
        case "manufacturer":
          const newManufacturer = filter.manufacturer.filter(e => e !== item.manufacturer)
          setFilter({ ...filter, manufacturer: newManufacturer })
          break
        case "category":
          const newCategory = filter.category.filter(e => e !== item.category)
          setFilter({ ...filter, category: newCategory })
          break
        case "price":
          const newPrice = filter.price.filter(e => e !== item.price)
          setFilter({ ...filter, price: newPrice })
          break
        default:
      }
    }
  }
  console.log(filter);
  return (
    <motion.div className="menu"
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
                  {manufacturer.map(item => (
                    <li className='checkbox' key={item.id}>
                      <input type="checkbox" id={item.manufacturer}
                        onChange={(input) => filterSelect("manufacturer", input.checked, item)}
                        checked={filter.manufacturer.includes(item.manufacturer)}
                      />
                      <label for={item.manufacturer}>{item.manufacturer}</label>
                    </li>
                  ))}

                </ul>
              </div>
              <div className="menu_wrapper">
                <h3>Category</h3>
                <ul>
                  {category.map(item => (
                    <li className='checkbox' key={item.id}>
                      <input type="checkbox" id={item.category}
                      onChange={(input) => filterSelect("category", input.checked, item)}
                      checked={filter.category.includes(item.category)}
                      />
                      <label for={item.category}>{item.category}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="menu_wrapper">
                <h3>Price</h3>
                <ul>
                  {price.map(item => (
                    <li className='checkbox' key={item.id}>
                      <input type="checkbox" id={item.price}
                      onChange={(input) => filterSelect("price", input.checked, item)}
                      checked={filter.price.includes(item.price)}
                      />
                      <label for={item.price}>{item.price}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={hide ? "button_filter active" : "button_filter"} onClick={() => { setControl(currentPosts); setHide(true) }}>
              <button>Clear filter</button>
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
                <div className="sort_page">
                  <h3>Show: </h3>
                  <select name="sortby" id="sortby" onChange={(e) => setPostPerPage(e.target.value)}>
                    <option value="0">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="sort_title">
                  <h3>Sort by: </h3>
                  <select name="sortby" id="sortby">
                    <option value="default">Default</option>
                    <option value="Product name">Product Name</option>
                  </select>
                </div>
                {arrange == true ?
                  (<i className="fa fa-arrow-down" aria-hidden="true"
                    onClick={() => { sortPrice(); setArrange(false) }}></i>) :
                  (<i className="fa fa-arrow-up" aria-hidden="true"
                    onClick={() => { sortPrice(); setArrange(true) }}></i>)
                }
              </div>
            </div>
            <div className="menuright_list">
              {loading == true ? (<Loading />) : (
                <> {control.map(item => (
                  <div className={actie ? "menuright_item" : "menuright_item active"} key={item.id}>
                    <img src={item.image} />
                    <div className="menuright_des">
                      <img src={item.rating} className={actie ? "image active" : "image"} />
                      <h3>{item.title}</h3>
                      <p>${item.price}</p>
                      <div className={actie ? "hide" : "hide active"}>
                        <img src={item.rating} />
                        <p>{item.customerreview.filter(item1 => item1.text).length} review</p>
                      </div>
                      <h5 className={actie ? "hide" : "hide active"}>{item.description}</h5>
                      <div className={actie ? "hide" : "hide active"}>
                        <button onClick={() => { handleAddToCart(item); notify() }}>
                          <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart
                        </button>
                        <Link to={`/details/${item.id}`}><i className="fa fa-eye" aria-hidden="true"></i></Link>
                      </div>
                    </div>
                    <div className={actie ? "menuright_item_overlay active" : "menuright_item_overlay"}>
                      <div className="overlay_control">
                        <Link className="control_item">
                          <i onClick={() => { handleAddToCart(item); notify() }}
                            className="fa fa-cart-plus" aria-hidden="true"></i>
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
                ))}</>
              )}
            </div>
            {loading == true ? "" : (<Pagination
              postsPerPage={postsPerPage}
              totalPosts={tab.length}
              paginate={paginate}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />)}
          </div>
        </div>
        <Footer />
      </HelmetProvider>
    </motion.div>
  )
}

export default Menu