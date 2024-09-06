import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out"
  >
    {children}
  </Link>
);

const DropdownLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition duration-150 ease-in-out"
  >
    {children}
  </Link>
);

const Dropdown = ({ title, items, isOpen, toggleDropdown }) => (
  <div className="relative">
    <button
      className="flex items-center text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium focus:outline-none transition duration-150 ease-in-out"
      onClick={toggleDropdown}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      {title}
      <ChevronDown
        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
          isOpen ? "transform rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
        {items.map((item, index) => (
          <DropdownLink key={index} href={item.href}>
            {item.label}
          </DropdownLink>
        ))}
      </div>
    )}
  </div>
);

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to update cart count from localStorage
  const updateCartCount = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(existingCart.length);
  };

  // On initial load, update the cart count from localStorage
  useEffect(() => {
    updateCartCount();
  }, []);

  const menItems = [
    { href: "/men-sport", label: "Sport" },
    { href: "/men-casual", label: "Casual" },
    { href: "/men-hiking", label: "Hiking" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-300 fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
            >
              Let Kick
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:ml-auto" ref={dropdownRef}>
            <NavLink href="/">Home</NavLink>
            <Dropdown
              title="Men"
              items={menItems}
              isOpen={activeDropdown === "men"}
              toggleDropdown={() => toggleDropdown("men")}
            />
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Cart Icon with count */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/myCart" className="relative text-gray-800 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setActiveDropdown(!activeDropdown)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none transition duration-150 ease-in-out"
              aria-expanded={activeDropdown}
            >
              {activeDropdown ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Cart icon for mobile */}
            <Link
              href="/myCart"
              className="ml-4 relative text-gray-800 hover:text-blue-600 transition duration-150 ease-in-out"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {activeDropdown && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/">Home</NavLink>
            <Dropdown
              title="Men"
              items={menItems}
              isOpen={activeDropdown === "men-mobile"}
              toggleDropdown={() => toggleDropdown("men-mobile")}
            />
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
