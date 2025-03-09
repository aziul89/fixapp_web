import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"; 
import Register from './pages/Register'
import ServicePage from './pages/ServicePage'; 
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;

// Footer e Navbar sempre visíveis
// Organizar a rota das páginas de serviços