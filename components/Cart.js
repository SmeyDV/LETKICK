'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card"; 
import { Button } from "./ui/button"; 
import { Alert } from "./ui/alert"; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [randomLink, setRandomLink] = useState("");

  useEffect(() => {
    // Fetch cart items from local storage when the page loads
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);

    // Set a random link for the "Continue Shopping" button
    setRandomLink(getRandomRoute());
  }, []);

  const handleRemoveItem = (index) => {
    // Remove item from cart by index
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleClearCart = () => {
    // Clear all items from the cart
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const calculateTotalPrice = () => {
    // Calculate the total price by summing the prices of all items in the cart
    return cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace("$", ""));
      return total + priceNumber;
    }, 0);
  };

  // Function to select a random route
  const getRandomRoute = () => {
    const routes = ["/men-sport", "/men-casual", "/men-hiking"];
    const randomIndex = Math.floor(Math.random() * routes.length);
    return routes[randomIndex];
  };

  return (
    <div className="container mx-auto p-6 mt-20 max-w-3xl bg-white dark:bg-gray-800">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <Alert variant="info" className="mb-6">
            Your cart is empty.
          </Alert>
          <Link href={randomLink} passHref>
            <Button className="text-lg font-bold">
              Continue Shopping 
            </Button>
          </Link>
        </div>
      ) : (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Your Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">Price: {item.price}</p>
                      {/* Display selected size and color */}
                      <p className="text-gray-600 dark:text-gray-300">Size: {item.selectedSize}</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Color: <span style={{ backgroundColor: item.selectedColor, display: 'inline-block', width: '16px', height: '16px', borderRadius: '50%' }}></span> {item.selectedColor}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-8 text-right flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Total: ${calculateTotalPrice().toFixed(2)}
            </h2>
            <div className="flex justify-end space-x-4 mt-4">
              <Button variant="secondary" onClick={handleClearCart}>
                Clear Cart
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  // Redirect to the checkout page
                  window.location.href = "/myCart/checkout";
                }}
              >
                Checkout
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Cart;
