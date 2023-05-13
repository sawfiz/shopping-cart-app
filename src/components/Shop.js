import Inventory from './Inventory';
import './Shop.css'

function Shop ({ inventory }) {
  return (
    <div className='shop'>
      <Inventory inventory={inventory} />
    </div>
  );
}

export default Shop;
