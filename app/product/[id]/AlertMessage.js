import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertMessage({ showAlert }) {
  return (
    showAlert && (
      <Alert className="mt-4 border-l-4 border-green-600 bg-green-50 text-green-800">
        <AlertTitle className="font-bold text-green-700">Success</AlertTitle>
        <AlertDescription className="text-green-700">
          Item added to your cart successfully!
        </AlertDescription>
      </Alert>
    )
  );
}
