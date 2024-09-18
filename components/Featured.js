import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import products from "../app/data/products";

// Function to shuffle an array
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Featured() {
  const [featuredShoes, setFeaturedShoes] = useState([]);

  useEffect(() => {
    // Shuffle the products array and then take the first 4 items on the client side
    const shuffledProducts = shuffleArray([...products]).slice(0, 8);
    setFeaturedShoes(shuffledProducts);
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white pt-2 mb-8">
          Featured Shoes
        </h2>
        <div className="flex flex-wrap justify-center mx-4">
          {featuredShoes.map((shoe) => (
            <div key={shoe.id} className="w-full md:w-1/2 lg:w-1/4 px-6 mb-8">
              <Link href={`/product/${shoe.id}`} passHref>
                <Card className="text-center h-full flex flex-col cursor-pointer bg-white dark:bg-gray-800">
                  <CardHeader className="p-0">
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className="w-full h-52 object-contain mb-4 rounded-t-md"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {shoe.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{shoe.price}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{shoe.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center mt-auto">
                    <Button variant="default">Buy Now</Button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
