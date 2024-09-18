import React from "react";
import Link from "next/link"; // Import Link
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

export default function ShoeCard({ shoe }) {
  return (
    <div className="flex justify-center items-center"> {/* Wrapper to center the card */}
      <Card
        key={shoe.id}
        className="w-[300px] max-w-sm h-full hover:cursor-pointer flex flex-col justify-between bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <CardHeader className="overflow-hidden">
          <img
            src={shoe.image}
            alt={`Image of ${shoe.name}`}
            className="w-full h-52 object-contain mb-4"
          />
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">{shoe.name}</CardTitle>
          <CardDescription className="font-extrabold text-xl text-blue-600 dark:text-blue-400">{shoe.price}</CardDescription>
          <p className="mt-2 text-gray-500 dark:text-gray-300">{shoe.description}</p>
        </CardContent>
        <CardFooter className="mt-4 flex justify-center"> {/* Center the button */}
          <Link href={`/product/${shoe.id}`}>
            <Button variant="default" size="default" className="w-44 rounded-sm">
              View details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
