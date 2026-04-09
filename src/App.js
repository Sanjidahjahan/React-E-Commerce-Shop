import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const productsData = require('./products.json');

function App() {
  const [cart, setCart] = useState([
    { ...productsData.find(p => p.id === 1), quantity: 1 },
    { ...productsData.find(p => p.id === 2), quantity: 2 },
    { ...productsData.find(p => p.id === 3), quantity: 1 },
  ]);

  function handleAddToCart(item, quantity) {
    if (quantity <= 0) return;

    const newCart = [...cart];
    const index = newCart.findIndex(ci => ci.id === item.id);

    if (index !== -1) {
      newCart[index].quantity += quantity;
    } else {
      newCart.push({ ...item, quantity });
    }

    setCart(newCart);
  }

  function handleRemoveFromCart(item, removeAll = false, quantity = 1) {
    const newCart = [...cart];
    const index = newCart.findIndex(ci => ci.id === item.id);
    if (index === -1) return;

    if (removeAll || quantity >= newCart[index].quantity) {
      newCart.splice(index, 1); 
    } else {
      newCart[index].quantity -= quantity; 
    }

    setCart(newCart);
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<ProductListing products={productsData} />} />
        <Route
          path="/product/:productId"
          element={
            <ProductDetails
              productsData={productsData}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
