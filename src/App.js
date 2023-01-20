

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  );
}

export default App;
