import './Home.css';
import Inventory from './components/Inventory';

function Home({ inventory }) {
  return (
    <div>
      <header>Products</header>
      <Inventory  inventory={inventory} />
    </div>
  );
}

export default Home;
