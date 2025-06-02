import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import { useNavigate } from 'react-router-dom';
function Home() {
   const navigate = useNavigate();
    const irParaOutraPagina = () => {
    navigate('/homedashboard'); // Faz um "push" para a nova rota
  };
  return (
    <div className="home-container">
  <button onClick={irParaOutraPagina}>
      Ir para outra rota
    </button>
      <Banner />
      <Services />
      <Chatbot />
    </div>
  );
}

export default Home;

// Navbar e Footer no App.js