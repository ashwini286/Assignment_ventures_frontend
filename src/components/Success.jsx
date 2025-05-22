import React from 'react';

export default function Success() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-roboto text-center">
      <h1 className="font-montserrat text-4xl text-primaryTeal font-bold mb-4">
        Payment Successful 🎉
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your support! Your payment has been received.
      </p>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-accentLime animate-progress"></div>
      </div>
    </div>
  );
}
