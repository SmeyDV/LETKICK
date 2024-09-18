import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-4xl font-bold text-gray-900">
              Let Kick
            </Link>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Elevate your style with the perfect pair of shoes from Let Kick.
              Discover a variety of footwear to suit every occasion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild className="p-0">
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-indigo-600"
                  >
                    Shop
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0">
                  <Link
                    href="/contact"
                    className="text-base text-gray-600 hover:text-indigo-600"
                  >
                    Contact
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0">
                  <Link
                    href="/faq"
                    className="text-base text-gray-600 hover:text-indigo-600"
                  >
                    FAQ
                  </Link>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Connect with Us
            </h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  <FaFacebookF size={24} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  <FaTwitter size={24} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  <FaInstagram size={24} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  <FaLinkedinIn size={24} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <p className="text-base text-gray-600">
            &copy; {new Date().getFullYear()} Let Kick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
