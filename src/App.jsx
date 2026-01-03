import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DesktopAgriInfo from './components/DesktopAgriInfo';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AllBrands from './Pages/AllBrands';
import Categories from './Pages/Categories';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import FAQ from './Pages/FAQ';
import Terms from './Pages/Terms';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundCancellation from './Pages/RefundCancellation';
import Career from './Pages/Career';
import Media from './Pages/Media';
import Navigation from './Pages/Navigation';

function App() {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  }, [pathname]);
  
  const showFooterRoutes = ["/", "/contact"];

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
          <Route path="/brands" element={<AllBrands />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-cancel" element={<RefundCancellation />} />
          <Route path="/career" element={<Career />} />
          <Route path="/media" element={<Media />} />
          <Route path="/navigation" element={<Navigation />} />

        </Routes>
      </main>

      {/* Footer */}
        {showFooterRoutes.includes(pathname) && <Footer />}
        <DesktopAgriInfo />
    </div>
  );
}

export default App;
