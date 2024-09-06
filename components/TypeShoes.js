'use client';
import React from 'react';
import Link from 'next/link';

const shoeTypes = [
  {
    id: 1,
    title: 'Sport Shoes',
    image: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/088413/1.jpg?4074',
    link: '/men-sport',
  },
  {
    id: 2,
    title: 'Hiking Shoes',
    image: 'https://www.teva.com/on/demandware.static/-/Sites/default/dwd626ecee/teva-us/images/lp/2024/03/S24_HikingShoesGuideLP-MultiDayHikes-1.jpg',
    link: '/men-hiking',
  },
  {
    id: 3,
    title: 'Casual Shoes',
    image: 'https://toffpark.com/wp-content/uploads/2021/08/Lace-up-Low-cut-Comfortable-Casual-Shoes-1.jpg',
    link: '/men-casual',
  },
];

export default function TypeShoes() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Select Your Style</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover the perfect shoes for every occasion and adventure.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shoeTypes.map((type) => (
            <Link href={type.link} key={type.id} className="block">
              <div className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full bg-white rounded-lg">
                <div className="p-0">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={type.image}
                      alt={`${type.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                      <h2 className="text-3xl font-bold text-white text-center px-4">{type.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
