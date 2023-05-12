import React from 'react';
import ProductBriefCart from './ProductBriefCart';
import './Cart.css';

export default function Cart({ cart, updateOrder, deleteOrder }) {
  function checkOut() {}

  const total = cart.reduce(
    (acc, current) => acc + current.item.price * current.qty,
    0
  );

  return (
    <div>
      <div className="cart-item">
        <div className="table-header">Item</div>
        <div className="table-header"></div>
        <div className="table-header">Product</div>
        <div className="table-header">Price</div>

        <div className="table-header">Qty</div>
        <div className="table-header">Amount</div>
        <div className="table-header"></div>
      </div>
      <div>
        {[...cart].map((order, index) => (
          <ProductBriefCart
            key={order.uid}
            index={index}
            order={order}
            updateOrder={updateOrder}
            deleteOrder={deleteOrder}
          />
        ))}
      </div>
      <div className="cart-item">
        <div className="table-header"></div>
        <div className="table-header"></div>
        <div className="table-header"></div>
        <div className="table-header"></div>
        <div className="table-header right">Total</div>
        <div className="table-header right">${total.toFixed(2)}</div>
        <div className="table-header"></div>
      </div>

      <div>
        <button onClick={() => checkOut({})}>Check out</button>
      </div>
    </div>
  );
}
