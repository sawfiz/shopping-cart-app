import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';
// import cartReducer from '../reducers/cartReducer';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

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
    let tempCart = cart.filter((o) => o.uid !== order.uid);
    setCart(tempCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateOrder, deleteOrder }}>
      {props.children}
    </CartContext.Provider>
  );
}
