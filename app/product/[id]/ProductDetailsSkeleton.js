import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component in ShadCN

export function ProductDetailsSkeleton() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="rounded-md overflow-hidden p-6 shadow-custom">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Skeleton for Product Image */}
          <div className="w-full md:w-1/2 h-64 bg-gray-200">
            <Skeleton className="w-full h-full" />
          </div>

          {/* Skeleton for Product Details */}
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            {/* Skeleton for Product Title */}
            <Skeleton className="h-8 w-3/4" />
            {/* Skeleton for Product Price */}
            <Skeleton className="h-6 w-1/4" />
            {/* Skeleton for Product Rating */}
            <Skeleton className="h-4 w-1/3" />
            {/* Skeleton for Product Description */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />

            {/* Skeleton for Size Dropdown */}
            <Skeleton className="h-8 w-1/3 mt-4" />
            {/* Skeleton for Color Options */}
            <div className="flex space-x-2 mt-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>

            {/* Skeleton for Add to Cart Button */}
            <div className="flex justify-start mt-4">
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
