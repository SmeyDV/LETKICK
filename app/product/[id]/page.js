'use client'
import { useState, useEffect } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import products from "../../data/products";
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';


export default function ProductDetails({ params }) {
  const { id } = params;
  const [shoe, setShoe] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (id) {
      const foundShoe = products.find((shoe) => shoe.id === parseInt(id));
      setShoe(foundShoe);
    }
  }, [id]);

  if (!shoe) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      alert('Please select a size and color');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mt-20 flex-grow">
        <div className="container mx-auto py-12 px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="h-96 w-full object-cover md:w-96"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {shoe.brand}
                </div>
                <h1 className="mt-2 text-3xl font-bold text-gray-900">{shoe.name}</h1>
                <p className="mt-2 text-3xl font-bold text-green-600">{shoe.price}</p>
                <div className="mt-4 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill={i < shoe.rating ? 'currentColor' : 'none'} />
                  ))}
                  <span className="ml-2 text-gray-600">({shoe.reviews} reviews)</span>
                </div>
                <p className="mt-4 text-gray-600">{shoe.description}</p>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Size:</label>
                    <select 
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      <option value="">Select a size</option>
                      {[7, 8, 9, 10, 11].map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Color:</label>
                    <select 
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    >
                      <option value="">Select a color</option>
                      {['Black', 'White', 'Red', 'Blue'].map((color) => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="mt-8 flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
    </div>
  );
}