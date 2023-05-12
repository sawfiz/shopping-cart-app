import React from 'react';
import { inventory } from '../utils/inventory';
import ProductBriefInventory from './ProductBriefInventory';

import './Inventory.css';

export default function Inventory() {
  return (
    <div className="inventory">
      {inventory.map((item, index) => (
        <div>
          <ProductBriefInventory key={index} item={item} index={index} />
        </div>
      ))}
    </div>
  );
}
