"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  useEffect(() => {
    // Fetch cart items from localStorage when the page loads
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace("$", ""));
      return total + priceNumber;
    }, 0);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (dummy function for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout form data submitted:", formData);
    alert("Checkout complete! Thank you for your purchase.");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Item Summary */}
        <div className="lg:col-span-1 bg-white p-6 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">Price: {item.price}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-md"
                  />
                </li>
              ))}
              <li className="mt-4 font-semibold">
                <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
              </li>
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Wrapped Form with Border */}
        <div className="lg:col-span-2 border border-gray-300 rounded-lg p-8 bg-white shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Complete Details</h2>

            {/* Shipping Details */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Payment Details */}
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  required
                  placeholder="MM/YY"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  name="cardCVC"
                  value={formData.cardCVC}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Shortened Button Label */}
            <button
              type="submit"
              className="mx-auto w-full bg-blue-500 text-white  text-lg font-light py-2 rounded-md hover:opacity-90 transition duration-300"
            >
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
