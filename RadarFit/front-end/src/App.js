import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/products/products';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <main className="main">
        <Routes>
          <Route exact path="/" element={ <Navigate to="/products" /> } />
          <Route exact path="/products" element={ <Products /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
