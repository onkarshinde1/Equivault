import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './landing_page/home/Homepage.jsx'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Signup from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/Aboutpage.jsx'
import ProductPage from './landing_page/product/ProductPage.jsx'
import PricingPage from './landing_page/pricing/Pricingpage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter >
)
