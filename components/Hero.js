import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-500 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg" // Ensure the image exists in the public folder
          alt="Stylish shoes background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-8 px-8 py-12 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              <span className="block">Step Into Style with</span>
              <span className="block text-yellow-300 mt-2">Let Kicks</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 sm:text-2xl max-w-xl">
              Discover our wide range of shoes for every occasion. From sporty
              to casual, find the perfect pair to kickstart your journey!
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/men-casual">
                <span className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 shadow-lg transition duration-300 ease-in-out  hover:scale-105">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out  hover:scale-105">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
            </div>
          </div>

          {/* Featured Shoe Image */}
          <div className="mt-12 lg:mt-6 lg:ml-8 hidden lg:block">
            <div className="relative w-[550px] h-[440px]">
              <Image
                src="/shoes.webp"
                alt="Featured shoe"
                layout="fill"
                objectFit="cover"
                className="drop-shadow-2xl"
                priority // Optimize GIF loading
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
