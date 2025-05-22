import React from 'react';

export default function Cancel() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-roboto text-center">
      <h1 className="font-montserrat text-4xl text-primaryTeal font-bold mb-4">
        Payment Cancelled ❌
      </h1>
      <p className="text-gray-600">
        Your payment was not completed. Please try again if you wish to support us.
      </p>
    </div>
  );
}
