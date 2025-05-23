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
     <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-[300px] animate-pulse">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C9A7">
                <animate attributeName="stop-color" values="#00C9A7;#CDDC39;#7F00FF;#00C9A7" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#7F00FF">
                <animate attributeName="stop-color" values="#7F00FF;#00C9A7;#CDDC39;#7F00FF" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fillOpacity="0.8"
            d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,176C840,181,960,203,1080,208C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CheckoutButton;
