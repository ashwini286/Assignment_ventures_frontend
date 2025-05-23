import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RRaA04FF7gDe5YJjCEcRyUo9K3JyDmhVMydOts3fzg8l8MQQTJTq8bTX5EOrDYErE2SfllROrM4U7g0cBxWtGMx007gb5ejnd'); // Replace with your actual publishable key

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      // const response = await fetch('http://localhost:5000/create-checkout-session', { method: 'POST' }); // Change URL to your backend
      const response = await fetch('https://assignment-ventures-backend-1.onrender.com/create-checkout-session', { method: 'POST' }); // Change URL to your backend
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to create checkout session');

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Support a cause by topping up points.</h1>
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md font-roboto">

        <h2 className="font-montserrat text-primaryTeal text-xl mb-6 text-center">Top Up Points - €1</h2>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-primaryTeal text-white py-3 rounded hover:bg-primaryTeal/90 transition disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Top Up Now'}
        </button>
        {error && <p className="mt-3 text-red-600 text-center">{error}</p>}
      </div>
    
    </div>
  );
};

export default CheckoutButton;
