import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/newlogo.png";
import "../styles/Navbar.css";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    MySwal.fire({
      title: 'Você tem certeza que deseja sair?',
      showCancelButton: true,
      confirmButtonText: 'Sair',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      customClass: {
        popup: 'my-popup',
        confirmButton: 'my-confirm-button',
        cancelButton: 'my-cancel-button'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate('/');
      }
    });
  };

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
        </ul>

        {isAuthenticated ? (
          <div className="dropdown">
            <button className="navbar-button dropdown-toggle">Perfil</button>
            <div className="dropdown-menu">
              <Link to="/profile">Ver perfil</Link>
              <button onClick={handleLogout}>Sair</button>
            </div>
          </div>
        ) : (
          <button className="navbar-button" onClick={() => navigate("/register")}>Contratar</button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
