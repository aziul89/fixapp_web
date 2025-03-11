import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logofix.png";
import "../styles/Navbar.css"; 

function Navbar() {
  const navigate = useNavigate(); // botão contratar -> cadastro

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="IdeaFix Logo" className="logo-img" />
        <h1 className="logo-text">IdeaFix</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/servicos">Serviços</Link></li> {/* Ir para a seção de serviços na Home */}
          <li><Link to="/como_funciona">Como funciona</Link></li>
        </ul>
        <button className="navbar-button" onClick={() => navigate("/register")}>Contratar</button>
      </nav>
    </header>
  );
}

export default Navbar;
