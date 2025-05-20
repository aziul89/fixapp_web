import { useState, useRef, useEffect } from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // refs para menu hamburguer e dropdown
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    MySwal.fire({
      title: "Você tem certeza que deseja sair?",
      showCancelButton: true,
      confirmButtonText: "Sair",
      cancelButtonText: "Não",
      reverseButtons: true,
      customClass: {
        popup: "my-popup",
        confirmButton: "my-confirm-button",
        cancelButton: "my-cancel-button",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

      {/* Hamburguer */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav
        ref={menuRef}
        className="nav-menu"
        style={{ display: menuOpen || window.innerWidth > 768 ? "flex" : "none" }}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/como-funciona" onClick={() => setMenuOpen(false)}>
              Como funciona
            </Link>
          </li>
        </ul>

        {isAuthenticated ? (
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="navbar-button dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Meu Perfil
            </button>

            <div
              className="dropdown-menu"
              style={{ display: dropdownOpen ? "block" : "none" }}
            >
              <Link
                className="perfil-teste"
                to="/profile"
                onClick={() => setMenuOpen(false)}
              >
                Ver perfil
              </Link>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
              >
                Sair
              </button>
            </div>
          </div>
        ) : (
          <button
            className="navbar-button"
            onClick={() => {
              setMenuOpen(false);
              navigate("/register");
            }}
          >
            Contratar
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
