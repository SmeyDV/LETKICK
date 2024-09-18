import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";


export default function ShoeCard({ shoe, isLoading }) {
  const router = useRouter();

  const goToDetails = () => {
    router.push(`/product/${shoe.id}`);
  };


  return (
    <div className="flex justify-center items-center "> {/* Wrapper to center the card */}
      <Card
        key={shoe.id}
        className="w-[300px] max-w-sm h-full hover:cursor-pointer flex flex-col justify-between"
        onClick={goToDetails}
      >
        <CardHeader className="overflow-hidden">
          <img
            src={shoe.image}
            alt={shoe.name}
            className="w-full h-52 object-contain mb-4"
          />
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="text-xl font-semibold text-gray-800">{shoe.name}</CardTitle>
          <CardDescription className="font-extrabold text-xl text-blue-600">{shoe.price}</CardDescription>
          <p className="mt-2 text-gray-500">{shoe.description}</p>
        </CardContent>
        <CardFooter className="mt-4 flex justify-start">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              alert(`${shoe.name} added to cart!`);
            }}
            variant="default"
            size="default"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
