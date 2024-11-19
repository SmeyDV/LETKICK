import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button"; // Importing ShadCN Button component

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden min-h-screen flex items-center">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white dark:text-gray-100 leading-tight mt-9">
              <span className="block">Step Into Style with</span>
              <span className="block text-yellow-300 dark:text-yellow-400 mt-2">Let Kicks</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 dark:text-gray-300 sm:text-2xl max-w-xl">
              Discover our wide range of shoes for every occasion. From sporty
              to casual, find the perfect pair to kickstart your journey!
            </p>
            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/men-casual" passHref>
                <Button variant="default" className="px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button variant="outline" className="px-8 py-3 rounded-full text-black dark:text-white border-white dark:border-gray-300 hover:bg-white dark:hover:bg-gray-700 transition duration-300 ease-in-out hover:scale-105">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Featured Shoe Image */}
          <div className="w-full max-w-sm mx-auto lg:max-w-none lg:w-1/2 xl:w-2/5">
            <div className="relative w-full pb-[80%] lg:pb-[100%]">
              <Image
                src="/shoes.webp"
                alt="Featured shoe"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Gradient Overlay at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
}
