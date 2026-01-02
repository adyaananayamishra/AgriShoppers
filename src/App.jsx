import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Categories from './Pages/Categories';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import FAQ from './Pages/FAQ';
import Terms from './Pages/Terms';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundCancellation from './Pages/RefundCancellation';

function App() {
  const { pathname } = useLocation(); // ✅ get current route

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // remove if you want instant
    });
  }, [pathname]); // ✅ runs on every route change

  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-cancel" element={<RefundCancellation />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
