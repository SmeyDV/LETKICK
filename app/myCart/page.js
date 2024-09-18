'use client';
import React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import './footer.css'; // Import CSS file for styling

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="content container mx-auto py-8">
        <Cart />
      </div>
      <Footer />
    </div>
  );
}
