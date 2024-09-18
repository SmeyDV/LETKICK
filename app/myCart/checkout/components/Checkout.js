// Checkout.js
import React, { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";

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
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Item Summary */}
        <OrderSummary
          cartItems={cartItems}
          calculateTotalPrice={calculateTotalPrice}
        />

        {/* Checkout Form */}
        <CheckoutForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
