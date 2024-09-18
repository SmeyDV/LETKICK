"use client";
import { useState, useEffect } from "react";
import products from "../../data/products";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductOptions from "./ProductOptions";
import AlertMessage from "./AlertMessage";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { ProductDetailsSkeleton } from "./ProductDetailsSkeleton"; // Import the Skeleton component

export default function ProductDetails({ params }) {
  const { id } = params;
  const [shoe, setShoe] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (id) {
      // Simulate a network request
      setTimeout(() => {
        const foundShoe = products.find((shoe) => shoe.id === parseInt(id));
        setShoe(foundShoe);
      }, 1000); // Simulate loading delay
    }
  }, [id]);

  if (!shoe) {
    // Display skeleton loader while the shoe is being fetched
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="mt-20 flex-grow">
          <ProductDetailsSkeleton />
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      alert("Please select a size and color");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="mt-20 flex-grow">
        <div className="container mx-auto py-12 px-4">
          <Card className="rounded-md overflow-hidden p-6 shadow-custom">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* Product Image */}
              <ProductImage image={shoe.image} name={shoe.name} />

              {/* Product Details Container */}
              <div className="flex flex-col space-y-4">
                {/* Product Info */}
                <ProductInfo
                  brand={shoe.brand}
                  name={shoe.name}
                  price={shoe.price}
                  rating={shoe.rating}
                  reviews={shoe.reviews}
                  description={shoe.description}
                />

                {/* Product Options */}
                <ProductOptions
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />

                {/* Add to Cart Button */}
                <CardFooter className="flex justify-start">
                  <Button onClick={handleAddToCart} variant="default">
                    Add to Cart
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Alert Message */}
      {showAlert && (
        <div className="fixed bottom-4 right-4">
          <Alert variant="success" className="w-64">
            Item added to cart!
          </Alert>
        </div>
      )}

      <Footer />
    </div>
  );
}
