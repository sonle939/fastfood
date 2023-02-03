

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "./components/Header";
function App() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  //Handle Remove from cart
  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;

          return [...cal, { ...item, amount: item.amount - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };
  return (
    <AnimatePresence initial={false}>
      <Header cart={cart}/>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home handleAddToCart={handleAddToCart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart} />} />
        <Route path='/menu' element={<Menu cart={cart} handleAddToCart={handleAddToCart}/>} />
        <Route path='/details/:id' element={<Details handleRemoveFromCart={handleRemoveFromCart}
        handleAddToCart={handleAddToCart}/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
