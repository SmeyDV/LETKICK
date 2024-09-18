import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const NavItem = React.forwardRef(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
    {...props}
  />
));
NavItem.displayName = "NavItem";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  useEffect(() => {
    const updateCartCount = () => {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(existingCart.length);
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const menItems = [
    { href: "/men-sport", label: "Sport" },
    { href: "/men-casual", label: "Casual" },
    { href: "/men-hiking", label: "Hiking" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
              Let Kicks
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition duration-300">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition duration-300">
                    Men
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-3">
                      {menItems.map((item, index) => (
                        <li key={index}>
                          <NavItem href={item.href}>{item.label}</NavItem>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition duration-300">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/myCart" className="relative text-gray-700 hover:text-blue-600 transition duration-300">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
            Home
          </Link>
          <div className="relative">
            <button 
              onClick={toggleSubMenu}
              className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium"
            >
              Men
              <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isSubMenuOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isSubMenuOpen && (
              <div className="bg-gray-50 py-2">
                {menItems.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href} 
                    className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-6 py-2 text-sm" 
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}