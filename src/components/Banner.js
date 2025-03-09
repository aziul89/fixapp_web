import { useNavigate } from "react-router-dom";
import "../styles/Banner.css"

function Banner() {
  const navigate = useNavigate(); // botão contratar -> cadastro

    return (
      <section className="banner">
        <div className="banner-content">
          <h1>Aplicação de Películas</h1>
          <p>Plataforma de contratação de serviços da IdeaFix.</p>
          <button className="cta-button" onClick={() => navigate("/register")}>Contrate agora</button>
        </div>
      </section>
    );
  }
  
  export default Banner;
  