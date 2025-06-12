// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; 

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! Página não encontrada.</p>
      <Link to="/" className="home-button">Voltar para a Home</Link>
    </div>
  );
}

export default NotFound;
