import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

export default function ProductDetails({inventory, addToCart }) {
  const [qty, setQty] = useState(0);

  const { id } = useParams();
  const item = inventory.find(item => item.uid === id);
  if (!item) {
    return <div> Not found </div>;
  }


  function updateQty(e) {
    setQty(parseInt(e.target.value));
  }

  function incrementQty() {
    setQty(qty + 1);
  }

  function decrementQty() {
    let temp = qty - 1;
    temp = temp < 0 ? 0 : temp;
    setQty(temp);
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.productContainer}>
        <div className={styles.imgContainer}><img src={item.image} alt="Orbeez" /></div>
        <div className={styles.details}>
          <div className={styles.bold}>{item.name}</div>
          <div>{item.description}</div>
          <div>Price ${item.price.toFixed(2)}</div>
          <div>
            <button onClick={decrementQty}>-</button>
            <input
              value={qty || '0'}
              size="3"
              type="text"
              pattern="[0-9]*"
              onChange={(e) => updateQty(e)}
            />
            <button onClick={incrementQty}>+</button>
          </div>
          <button onClick={() => addToCart({ item: item, qty: qty })}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
