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
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-4xl font-bold text-gray-900 dark:text-white">
              Let Kick
            </Link>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Elevate your style with the perfect pair of shoes from Let Kick.
              Discover a variety of footwear to suit every occasion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild className="p-0">
                  <Link
                    href="#"
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Shop
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0">
                  <Link
                    href="/contact"
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Contact
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0">
                  <Link
                    href="/faq"
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    FAQ
                  </Link>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
              Connect with Us
            </h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <FaFacebookF size={24} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <FaTwitter size={24} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <FaInstagram size={24} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="p-1">
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <FaLinkedinIn size={24} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-4 dark:border-gray-700" />

        <div className="text-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Let Kick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
