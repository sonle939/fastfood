import React, { useEffect, useRef } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cartempty from "../assets/cartempty.jpg";
import { Link } from 'react-router-dom';
function Cart({ cart, handleAddToCart, handleRemoveFromCart, }) {
  console.log(cart);
  const cartRef = useRef();
  const total = (arr) => {
    return arr.reduce((cal, item) => {
      return cal + item.price * item.amount;
    }, 0);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <motion.div className='cart'
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetProvider>
        <Helmet>
          <title>Cart</title>
        </Helmet>
        <ScrollToTop smooth top="100" />
        {cart.length == 0 ? (
          <div className='cart_text'>
            <img src={cartempty} />
            <h2>You have no items in your shopping cart.</h2>
            <p className='here'>Click <Link to="/menu">here</Link> to continue shopping.</p>
          </div>
        ) : (
          <div className='cart_container'>
            <h2>Shopping cart</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quality</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} />
                      <p>${item.title}</p>
                    </td>
                    <td className='price'><span>${item.price}</span></td>
                    <td className='amount_count'>
                      <div className='count'>
                        <p onClick={() => handleRemoveFromCart(item.id)}>-</p>
                        <p>{item.amount}</p>
                        <p onClick={() => handleAddToCart(item)}>+</p>
                      </div>
                    </td>
                    <td className='subtotal'><span>${item.price}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='cart_accept'>
              <p>Shipping costs might be added</p>
              <div className='accept_btn'>
                <button>continue shopping </button>
                <button>pay now ${total(cart)}</button>
              </div>
            </div>
          </div>
        )
        }
        <Footer />
      </HelmetProvider >
    </motion.div >
  )
}

export default Cart