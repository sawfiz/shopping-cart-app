import React, { createContext, useReducer, useEffect } from 'react';
import cartReducer from '../reducers/cartReducer';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer,[], () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : []
  });

    // This runs every time books change, e.g. add and remove books
    useEffect(
      () => localStorage.setItem('cart', JSON.stringify(cart)),
      [cart]
    );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}
