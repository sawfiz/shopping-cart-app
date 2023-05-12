import React from 'react';
import ProductBriefCart from './components/ProductBriefCart';

export default function Cart({cart}) {
  return (
    <div className='inventory'>
      {[...cart].map((order, index) => (
        <ProductBriefCart key={index} order={order} />
      ))}
    </div>
  );
}
