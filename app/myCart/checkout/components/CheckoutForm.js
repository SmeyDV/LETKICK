'use client';
import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert"; // Custom alert component from your UI library

export default function CheckoutForm({
  formData,
  handleInputChange,
  handleSubmit,
}) {
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleSubmit(e);
    setShowAlert(true); // Show the alert after form submission
    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <Card className="lg:col-span-2 shadow-md bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Complete Details</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Success Alert */}
        {showAlert && (
          <Alert variant="success" className="mb-4">
            Checkout complete! Thank you for your purchase.
          </Alert>
        )}

        <form onSubmit={handleFormSubmit}>
          {/* Shipping Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="col-span-full sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Address
              </label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                City
              </label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Postal Code
              </label>
              <Input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Country
              </label>
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
          </div>

          {/* Payment Details */}
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Payment Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="col-span-full sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Card Number
              </label>
              <Input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Expiry Date
              </label>
              <Input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleInputChange}
                required
                placeholder="MM/YY"
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                CVC
              </label>
              <Input
                type="text"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleInputChange}
                required
                className="dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              variant="primary"
              className="bg-black text-white py-2 px-4 rounded-md hover:opacity-80 transition duration-300"
            >
              Complete Order
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
