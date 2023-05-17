import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './ProductBriefCart.css';

export default function ProductBriefCart({
  index,
  order
}) {
  const { dispatch } = useContext(CartContext);
  const [qty, setQty] = useState(order.qty);
  const item = order.item;

  function updateQty(e) {
    const temp = e.target.value;
    setQty(parseInt(temp));
    dispatch({type: 'UPDATE_ORDER', data: {order, temp}})
    // updateOrder(order, temp);
  }
  
  function incrementQty() {
    let temp = qty + 1;
    setQty(temp);
    dispatch({type: 'UPDATE_ORDER', data: {order, temp}})
    // updateOrder(order, temp);
  }
  
  function decrementQty() {
    let temp = qty - 1;
    temp = temp < 0 ? 0 : temp;
    setQty(temp);
    dispatch({type: 'UPDATE_ORDER', data: {order, temp}})
    // updateOrder(order, temp);
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
        <button onClick={() => dispatch({type: 'DELETE_ORDER', order})}>❌</button>
      </div>
    </div>
  );
}
