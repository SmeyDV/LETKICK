"use client";
import { useState, useEffect } from "react";
import products from "../../data/products";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductOptions from "./ProductOptions";
import AddToCartButton from "./AddToCartButton";
import AlertMessage from "./AlertMessage";

export default function ProductDetails({ params }) {
  const { id } = params;
  const [shoe, setShoe] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (id) {
      const foundShoe = products.find((shoe) => shoe.id === parseInt(id));
      setShoe(foundShoe);
    }
  }, [id]);

  if (!shoe) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
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
          <div className="bg-white rounded-md overflow-hidden p-6 shadow-custom">
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
                <AddToCartButton handleAddToCart={handleAddToCart} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
