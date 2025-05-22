import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckoutButton from './components/CheckoutButton';
import Success from './components/Success';
import Cancel from './components/Cancel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckoutButton />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
