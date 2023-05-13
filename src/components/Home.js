import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Home.css'

export default function Home() {
  return ( 
  <div className="home">
    <div className="welcome">Welcome to the ShuShop!</div>
    <button className="enter-shop-btn" ><Link to="/shop" style={{ textDecoration: 'none' }}>Enter the shop</Link></button>
  </div>)
}
