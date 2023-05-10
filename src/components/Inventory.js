import React from 'react';
import { inventory } from '../utils/inventory';
import Product from './Product';
import './Inventory.css'

export default function Inventory() {
  return (
    <div className='inventory'>
      {inventory.map((item, index) => (
        <Product key={index} item={item}/>
      ))}
    </div>
  );
}
