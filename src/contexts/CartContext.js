import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer,[]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}
