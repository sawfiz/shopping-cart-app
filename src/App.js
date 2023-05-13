import { useState, useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';

import { products } from './utils/products';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);

  const inventory = useRef(
    products.map((product) => ({ ...product, uid: uniqid() }))
  );

  function addToCart(order) {
    if (!order.qty) return;
    // If the item already in cart, accumulate the quantity
    let tempCart = [...cart];
    const target = tempCart.find((o) => o.item.uid === order.item.uid);
    if (target) {
      target.qty += order.qty;
    } else {
      // If not, add order to cart
      const tempOrder = { ...order, uid: uniqid() };
      tempCart = [...tempCart, tempOrder];
    }
    setCart(tempCart);
  }

  // Update the order when modified in Cart
  function updateOrder(order, qty) {
    let tempCart = [...cart];
    const target = tempCart.find((o) => o.item.name === order.item.name);
    if (target) {
      target.qty = qty;
    }
    setCart(tempCart);
  }

  function deleteOrder(order) {
    let tempCart = cart.filter(o => o.uid !== order.uid)
    setCart(tempCart)
  }

  const NavLiStyle = {
    textDecoration: 'none', color:'white'
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" style={NavLiStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" style={NavLiStyle}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" style={NavLiStyle}>
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop inventory={inventory.current} />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              inventory={inventory.current}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} updateOrder={updateOrder} deleteOrder={deleteOrder}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
