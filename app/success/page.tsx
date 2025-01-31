import React from "react";
import { CircleCheckBigIcon } from "lucide-react";

const SuccessPage = () => {
  return (
    <main className="w-full h-screen bg-gray-900">
      <div className="text-white grid place-content-center h-full">
        <div className="max-w-6xl flex flex-col items-center justify-center space-y-6">
          <CircleCheckBigIcon size={150} className="text-green-600" />
          <h1 className="text-clampThankYou tracking-wider">Thank You</h1>
          <h1 className="text-clampHeading tracking-wider">
            Form Submitted Sucessfully...
          </h1>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;
