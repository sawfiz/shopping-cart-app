import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { inventory } from '../utils/inventory';
import './ProductDetails.css';

export default function ProductDetails({ addToCart }) {
  const [qty, setQty] = useState(0);

  const { id } = useParams();
  if (id >= inventory.length) {
    return <div> Not found </div>;
  }

  const item = inventory[id];

  function updateQty(e) {
    setQty(parseInt(e.target.value));
  }

  function incrementQty() {
    setQty(qty + 1);
  }

  function decrementQty() {
    let temp = qty - 1;
    temp = temp < 0 ? 0 : temp;
    setQty(temp);
  }

  return (
    <div className="product">
      <div>{id}</div>
      <div>{item.name}</div>
      <img src={item.image} alt="Orbeez" />
      <div>{item.description}</div>
      <div>{item.price}</div>
      <button onClick={decrementQty}>-</button>
      <input
        value={qty || '0'}
        type="text"
        pattern="[0-9]*"
        onChange={(e) => updateQty(e)}
      />
      <button onClick={incrementQty}>+</button>
      <button onClick={() => addToCart({ item: item, qty: qty })}>
        Add to cart
      </button>
      <Link to={`/product/${id}`}> Link {id}</Link>
    </div>
  );
}
