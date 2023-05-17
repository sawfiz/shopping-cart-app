import { useContext, useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';

import { products } from './utils/products';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

import { CartContext, CartContextProvider } from './contexts/CartContext';

import './App.css';
import Footer from './components/Footer';

const App = () => {
  const { cart } = useContext(CartContext);

  const inventory = useRef(
    products.map((product) => ({ ...product, uid: uniqid() }))
  );

  return (
    <div className="App">
      <nav>
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-link">
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop inventory={inventory.current} />} />
        <Route
          path="/product/:id"
          element={<ProductDetails inventory={inventory.current} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
