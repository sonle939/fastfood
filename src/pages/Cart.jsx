import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../components/Header'

function Cart({cart,handleAddToCart,handleRemoveFromCart,}) {
  console.log(cart);
  return (
    <div className='cart'>
    <HelmetProvider> 
    <Helmet>
      <title>Cart</title>
    </Helmet>
    <Header/>
    <div className='cart_container'>
        <h2>Shopping cart</h2>
        <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quality</th>
          <th>Subtotal</th>
        </tr>
        {cart.map(item=>(
          <tr key={item.id}>
              <td>
                <img src={item.image}/>
                <p>{item.title}</p>
              </td>
              <td>{item.price}</td>
              <td>
                  <p>-</p>
                  <p></p>
                  <p>+</p>
              </td>
              <td>{item.price}</td>
          </tr>
        ))}
      </table>
    </div>
    <div className='cart_accept'>
        <p>Shipping costs might be added</p>
        <div className='accept_btn'>
            <button>continue shopping </button>
            <button>pay now {}</button>
        </div>
    </div>
  </HelmetProvider>
    </div>
  )
}

export default Cart