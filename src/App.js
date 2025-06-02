import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Login from './pages/Login'
import RecuperarSenha from './pages/RecuperarSenha';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ComoFunciona from './pages/ComoFunciona';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';
import Profile from './pages/Profile';
import HomeDashboard from './dashboard/homeDashboard';
import AgendamentoDetail from './dashboard/agendamentoDetail';
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
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/homedashboard" element={<HomeDashboard />} />
        <Route path="/agendamentos/:id" element={<AgendamentoDetail />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;


// Footer e Navbar sempre visíveis
// Organizar a rota das páginas de cada serviço