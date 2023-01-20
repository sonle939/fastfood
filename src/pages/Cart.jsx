import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Cart() {
  return (
    <div>
    <HelmetProvider>
    <Helmet>
      <title>Cart</title>
    </Helmet>

  </HelmetProvider>
    </div>
  )
}

export default Cart