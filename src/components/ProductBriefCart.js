import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductBriefCart.css';

export default function ProductBriefCart({ order }) {
  console.log(
    '🚀 ~ file: ProductBriefCart.js:6 ~ ProductBriefCart ~ order:',
    order
  );
  // const [qty, setQty] = useState(0);
  const item = order.item;

  // function updateQty(e) {
  //   console.log(
  //     '🚀 ~ file: Product.js:10 ~ updateQty ~ e.target.value:',
  //     e.target.value
  //   );
  //   setQty(parseInt(e.target.value));
  // }

  // function incrementQty() {
  //   setQty(qty + 1);
  // }

  // function decrementQty() {
  //   let temp = qty - 1;
  //   temp = temp < 0 ? 0 : temp;
  //   setQty(temp);
  // }

  return (
    <div className="product">
      <div>{item.name}</div>
      <img src={item.image} alt="Orbeez" />
      <div>{item.description}</div>
      <div>Price {item.price}</div>
      <div>Quantity: {order.qty}</div>
      {/* <button onClick={decrementQty}>-</button>
      <input
        value={qty || '0'}
        type="text"
        pattern="[0-9]*"
        onChange={(e) => updateQty(e)}
      />
      <button onClick={incrementQty}>+</button>
      <button onClick={() => addToCart({ item: item, qty: qty })}>
        Add to cart
      </button> */}
      {/* <Link to={`/product/${index}`}> Link {index}</Link> */}
    </div>
  );
}
