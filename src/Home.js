import './Home.css';
import Inventory from './components/Inventory';

function Home({ addToCart }) {
  return (
    <div>
      <header>Products</header>
      <Inventory addToCart={addToCart} />
    </div>
  );
}

export default Home;
