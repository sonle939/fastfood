import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../components/Footer';
import Header from '../components/Header';
import funituredata from "../data/funiture";
import { motion } from 'framer-motion';
function Details() {
  const { id } = useParams();
  const [tab, setTab] = useState(true);
  const [count, setCount] = useState(1);
  const [data,setData] = useState([]);
    const filterData = () => {
      const filteritem = funituredata.filter((itemdata) => {
        return itemdata.id == id;
      })
      setData(filteritem);
    }
    useEffect(()=>{
      filterData();
    },[])
    console.log(data.includes("category"))
    // {funituredata.map(item=>(
    //   <div className='related_item'>
    //       <h1>{item.price}</h1>
    //   </div>
    //  ))}
  return (
    <motion.div className='details'
    inital={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{opacity:0}}
    transition={{ duration: 0.5,ease: "easeOut" }}
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
                  <button><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
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
 
          </div>
        </div>
        <Footer/>
      </HelmetProvider>
    </motion.div>
  )
}

export default Details