// pages/product/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import products from '../../data/products'; 


export default function ProductDetail({ addToCart }) {
  const router = useRouter();
  const { id } = router.query; // Extract the product id from the URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      if (foundProduct) {
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0]);
      }
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          {/* Simple image gallery */}
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} image ${index + 1}`}
              className={`w-full h-64 object-cover mb-4 ${index !== 0 ? 'hidden md:block' : ''}`}
            />
          ))}
          {/* If you want a carousel, consider using a library like Swiper.js */}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-blue-600 font-extrabold mt-2">${product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Select Size</h2>
            <div className="flex space-x-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Select Color</h2>
            <div className="flex space-x-4 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color ? 'ring-2 ring-blue-600' : ''
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  aria-label={color}
                ></button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart({ ...product, selectedSize, selectedColor })}
            className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
