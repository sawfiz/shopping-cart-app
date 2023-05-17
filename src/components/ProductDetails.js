import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

import Modal from './Modal';
import styles from './ProductDetails.module.css';

export default function ProductDetails({ inventory }) {
  const { addToCart } = useContext(CartContext);


  
  const [qty, setQty] = useState(0);
  const [showModal, setShowModal] = useState(false);


  const { id } = useParams();
  const item = inventory.find((item) => item.uid === id);
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

  function addToCardAndShowModal() {
    if (qty) {
      addToCart({ item: item, qty: qty });
      setShowModal(true);
    }
  }

  function hideModal() {
    setShowModal(false);
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.productContainer}>
        <div className={styles.imgContainer}>
          <img src={item.image} alt="Orbeez" />
        </div>
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
          <button onClick={addToCardAndShowModal}>Add to cart</button>
        </div>
      </div>
      <Modal
        showModal={showModal}
        hideModal={hideModal}
        message="Added to cart"
      />
    </div>
  );
}
