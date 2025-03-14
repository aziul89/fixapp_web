import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"; 
import Register from './pages/Register'
import Register2 from './pages/Register2'
import Register3 from './pages/Register3';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/register2" element={<Register2 />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;

// Footer e Navbar sempre visíveis
// Organizar a rota das páginas de cada serviço