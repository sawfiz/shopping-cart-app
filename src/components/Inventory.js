import React from 'react';
import ProductBriefInventory from './ProductBriefInventory';

import './Inventory.css';

export default function Inventory({inventory}) {
  console.log("🚀 ~ file: Inventory.js:7 ~ Inventory ~ inventory:", inventory)
  return (
    <div className="inventory">
      {inventory.map((item) => (
          <ProductBriefInventory key={item.uid} item={item}/>
      ))}
    </div>
  );
}
