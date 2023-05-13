import React from 'react';
import './Modal.css';

export default function Modal({ showModal, hideModal }) {
  const show = showModal ? 'block' : 'none';
  return (
    <div className="overlay" style={{ display: show }}>
      <div className="modal">
        <div>Added to cart</div>
        <button onClick={hideModal}>Continue shopping</button>
      </div>
    </div>
  );
}
