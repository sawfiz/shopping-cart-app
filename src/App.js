import {useState} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './components/ProductDetails';
import Cart from './Cart';

const App = () => {

  const [cart, setCart] = useState(new Set())

  function addToCart (order) {
    const tempCart = new Set([...cart, order])
    setCart(tempCart)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>
    </>
  );
};

export default App;
