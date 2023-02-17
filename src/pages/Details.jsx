import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../components/Footer';
import funituredata from "../data/funiture";
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
function Details({ handleAddToCart }) {
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
  const { id } = useParams();
  const [tab, setTab] = useState(true);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const filterData = () => {
    const filteritem = funituredata.filter((itemdata) => {
      return itemdata.id == id;
    })
    setData(filteritem);

  }
  useEffect(() => {
    filterData();
  }, [])
  const valueKey = funituredata.filter(item => item.id == id)[0].category;
  return (
    <motion.div className='details'
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <ScrollToTop smooth top="100" />
        <div className="breadcrumb">
          <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
          <p>/</p>
          <Link to="/menu">Menu</Link>
          <p>/</p>
          {funituredata.filter(item => item.id == id).map(item1 => (
            <h5>{item1.title}</h5>
          ))}
        </div>
        <div className='details_wrapper'>
          {data.map(item1 => (
            <div className='details_item' key={item1.id}>
              <img src={item1.image} />
              <div className='details_des'>
                <h2>{item1.title}</h2>
                <div className='details_rating'>
                  <img src={item1.rating} />
                  <p>{item1.customerreview.filter(item1 => item1.text).length} review</p>
                </div> 
                <div className='price_details'>
                  <p className={item1.type === "discount" ? "old" : "old active"}>$ {item1.price}</p>
                  {item1.type === "discount" ? <p>$ {item1.pricesale}</p> : ""}
                </div>
                <p className='amount'>Amount: {item1.amount}</p>
                <div className='details_amount'>
                  <div onClick={() => setCount(count - 1)}>-</div>
                  <p>{count}</p>
                  <div onClick={() => setCount(count + 1)}>+</div>
                </div>
                <div className='details-mota'>
                  {item1.description}
                </div>
                <div className='details_btn'>
                  <button onClick={() => {handleAddToCart(item1); notify()}}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                  <button><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          ))} 
        </div>
        <div className='details_tabs'>
          <div className='tabs_control'>
            <div onClick={() => { setTab(true); }} className={tab ? "tabs_item active" : "tabs_item"}>description</div>
            <div onClick={() => { setTab(false); }} className={tab ? "tabs_item" : "tabs_item active"}>customer review</div>
          </div>
          {data.map(item1 => (
            <div className='tab_content' key={item1.id}>
              {tab == true ?
                <p className='description_text'>{item1.description}</p> :
                (
                  <div className='customer_list'>
                    {item1.customerreview.map(item2 => (
                      <div className='customer_item' key={item2.id}>
                        <img src={item2.imagecus} />
                        <div className='customer_text'>
                          <h2>{item2.fullname}</h2>
                          <img src={item2.review} />
                          <p>{item2.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
        <div className='related'>
          <div className='related_top'>
            <h2>RELATED PRODUCTS</h2>
            <div className='line'>
              <div className='line_icon'>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className='related_bottom'>
            {funituredata.filter(item => item.category == valueKey).slice(0, 4).map(item1 => (
              <div className='related_item' key={item1.id}>
                <div className='related_image'>
                  <img src={item1.image} className="image" />
                </div>
                <div className='related_text'>
                  <img src={item1.rating} />
                  <h3>{item1.title}</h3>
                  <p>${item1.price}</p>
                </div>
                <div className='overlay_control'>
                  <Link className="control_item">
                    <i onClick={() => handleAddToCart(item1)}
                      className="fa fa-cart-plus" aria-hidden="true"></i>
                  </Link>
                  <Link className="control_item">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </Link>
                  <Link className="control_item" to={`/details/${item1.id}`}>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            ))} 

          </div>
        </div>
        <Footer />
      </HelmetProvider>
    </motion.div>
  )
}

export default Details