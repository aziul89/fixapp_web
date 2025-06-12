import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import Register3 from "../pages/Register3";
import Login from "../pages/Login";
import RecuperarSenha from "../pages/RecuperarSenha";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import ComoFunciona from "../pages/ComoFunciona";
import Services from "../components/Services";
import ServiceDetail from "../components/ServiceDetail";
import Profile from "../pages/Profile";
import NotFound from "../components/NotFound"

function ClientRoutes() {
  return (
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
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

export default ClientRoutes;
