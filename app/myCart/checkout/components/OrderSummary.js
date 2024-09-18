// OrderSummary.js
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function OrderSummary({ cartItems, calculateTotalPrice }) {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.length > 0 ? (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-medium">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Price: {item.price}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Size: {item.selectedSize}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Color: {item.selectedColor}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-md"
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
      </CardContent>
    </Card>
  );
}
