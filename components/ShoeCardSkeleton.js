import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component

export function ShoeCardSkeleton() {
  return (
    <div className="container mt-16 mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Render multiple skeleton cards to simulate loading */}
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="w-[300px] max-w-sm h-full flex flex-col justify-between p-4 bg-white rounded-md shadow-md">
            {/* Skeleton for Product Image */}
            <div className="overflow-hidden mb-4">
              <Skeleton className="h-52 w-full object-contain rounded-md" />
            </div>
            {/* Skeleton for Product Info */}
            <div className="flex-grow space-y-2">
              <Skeleton className="h-6 w-3/4 rounded-md" /> {/* Title Skeleton */}
              <Skeleton className="h-5 w-1/4 rounded-md" /> {/* Price Skeleton */}
              <Skeleton className="h-4 w-full rounded-md" /> {/* Description Skeleton */}
            </div>
            {/* Skeleton for Button */}
            <div className="mt-4">
              <Skeleton className="h-10 w-32 rounded-md" /> {/* Button Skeleton */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
