'use client';
import React from 'react'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import './footer.css'; // Import CSS file for styling

export default function Page() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content">
        <Cart />
      </div>
      <Footer />
    </div>
  )
}
