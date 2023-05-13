import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductBriefCart.css';

export default function ProductBriefCart({ index, order, updateOrder, deleteOrder }) {
  const [qty, setQty] = useState(order.qty);
  const item = order.item;

  function updateQty(e) {
    const temp = e.target.value;
    setQty(parseInt(temp));
    updateOrder(order, temp);
  }

  function incrementQty() {
    let temp = qty + 1;
    setQty(temp);
    updateOrder(order, temp);
  }

  function decrementQty() {
    let temp = qty - 1;
    temp = temp < 0 ? 0 : temp;
    setQty(temp);
    updateOrder(order, temp);
  }

  return (
    <div className="cart-item">
      <div className="right">{index + 1}</div>
      <div className="table-content-center">
        <img src={item.image} alt="Orbeez" />
      </div>
      <div className="table-content-left">{item.name}</div>
      <div className="right">{item.price.toFixed(2)}</div>

      <div className="table-content-center">
        <button onClick={decrementQty}>-</button>
        <input
          className="right"
          value={qty || '0'}
          type="text"
          size="2"
          pattern="[0-9]*"
          onChange={(e) => updateQty(e)}
        />
        <button onClick={incrementQty}>+</button>
      </div>
      <div className="right">{(item.price * qty).toFixed(2)}</div>
      <div className="table-content-center">
        <button onClick={()=>deleteOrder(order)}>❌</button>
      </div>
    </div>
  );
}
