import React from 'react';
import './Product.css'

export default function Product({ item }) {
  return (
    <div className='product'>
      <div>{item.name}</div>
      <img src={item.image} alt="Orbeez"/>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <button>-</button>
      <input type='number'/>
      <button>+</button>
      <button>Add to cart</button>
    </div>
  );
}
