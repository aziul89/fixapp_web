import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones sociais
import { Link } from "react-router-dom"; // Importando Link

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/aboutus">Quem Somos</Link>
          <a href="#">Como Funciona</a>
          <a href="#">Contato</a>
          <a href="#">Política de Privacidade</a>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebook /></a>
          <a href="https://www.instagram.com/ideafix.decor"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>

        <p className="footer-rights">© 2025 IdeaFix. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
