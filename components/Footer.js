import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-400 h-16"> 
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="text-3xl font-bold text-gray-900">
              Let Kick
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Elevate your style with the perfect pair of shoes from Let Kick. Discover a variety of footwear to suit every occasion.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-16 md:w-1/3  ">
            <div className="mb-8 md:mb-0">
              <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-indigo-600 transition-colors duration-200">
                    Shop
                  </Link>
                </li>
                <li className="mb-2">                
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:text-indigo-600 transition-colors duration-200">
                    Contact 
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/faq" className="hover:text-indigo-600 transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect with Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  <FaFacebookF size={20} />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  <FaTwitter size={20} />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  <FaInstagram size={20} />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  <FaLinkedinIn size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mx-8  pt-4 text-center">
          <p className="text-md text-gray-600">
            &copy; {new Date().getFullYear()} Let Kick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
