import React from 'react';
import ProductBriefInventory from './ProductBriefInventory';

import './Inventory.css';

export default function Inventory({inventory}) {
  return (
    <div className="inventory">
      {inventory.map((item, index) => (
          <ProductBriefInventory key={item.uid} item={item} index={index} />
      ))}
    </div>
  );
}
