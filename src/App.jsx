import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home';
import Account from './components/pages/account';


// import MenClothing from './pages/MenClothing';
// import WomenClothing from './pages/WomenClothing';
// import ProductDetail from './pages/ProductDetail';
// import CreateAccount from './pages/CreateAccount';
// import Cart from './pages/Cart';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<Account />} />
        
        
        {/* <Route path="/men" element={<MenClothing />} />
        <Route path="/women" element={<WomenClothing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;