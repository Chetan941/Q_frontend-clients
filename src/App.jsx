import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './suby/pages/LandingPage';
import ProductMenu from './suby/components/ProductMenu';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
    </Routes>
  );
};

export default App;
