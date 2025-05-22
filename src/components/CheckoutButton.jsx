// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_YourPublishableKeyHere');

// export default function CheckoutButton() {
//   const [loading, setLoading] = useState(false);

//   async function handleCheckout() {
//     setLoading(true);
//     const stripe = await stripePromise;

//     const response = await fetch('http://localhost:5000/create-checkout-session', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     const session = await response.json();

//     const result = await stripe.redirectToCheckout({ sessionId: session.id });
//     if (result.error) {
//       alert(result.error.message);
//     }
//     setLoading(false);
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-roboto">
//       <h2 className="font-montserrat text-3xl text-primaryTeal mb-4 text-center font-bold">
//         Support Growth with Your Payment
//       </h2>
//       <p className="text-gray-600 text-center mb-8">
//         Your contribution helps us grow and support more users like you.
//       </p>
//       <button
//         onClick={handleCheckout}
//         disabled={loading}
//         className={`w-full py-3 rounded-md text-white font-bold transition-colors
//           ${loading ? 'bg-primaryTeal/70 cursor-not-allowed' : 'bg-primaryTeal hover:bg-primaryTeal/90'}`}
//       >
//         {loading ? 'Redirecting...' : 'Pay €1 Now'}
//       </button>
//     </div>
//   );
// }



// src/components/CheckoutButton.jsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RRaA04FF7gDe5YJjCEcRyUo9K3JyDmhVMydOts3fzg8l8MQQTJTq8bTX5EOrDYErE2SfllROrM4U7g0cBxWtGMx007gb5ejnd'); // Replace with your actual publishable key

const CheckoutButton = () => {
  const handleCheckout = async () => {
    const res = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
    });

    const data = await res.json();

    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-montserrat text-[#00897B] mb-4">Top Up Points</h2>
      <p className="text-roboto text-gray-700 mb-6">Buy points to unlock premium features.</p>
      <button
        onClick={handleCheckout}
        className="bg-[#00897B] hover:bg-[#00695c] text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        Pay €1 Now
      </button>
    </div>
  );
};

export default CheckoutButton;
