import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import logo from "../assets/newlogo.png";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); 

  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src={logo}
          alt="IdeaFix Logo"
          className="logo-img"
          onClick={() => navigate("/")}
        />
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/como_funciona">Como funciona</Link></li>
          {isAuthenticated && (
            <li><Link to="/profile">Perfil</Link></li> /* Criar a página de Perfil */
          )}
        </ul>

        {isAuthenticated ? (
          <button className="navbar-button" onClick={logout}>Sair</button> /* Ir para a página Home */
        ) : (
          <button className="navbar-button" onClick={() => navigate("/register")}>
            Contratar
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
