import "../styles/Footer.css";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones sociais
import { Link } from "react-router-dom"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/aboutus">Quem Somos</Link>
          
          <Link to="/contact">Contato</Link>
          <a href="#">Política de Privacidade</a>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebook /></a>
          <a href="https://www.instagram.com/ideafix.decor"><FaInstagram /></a>
          <a href="#"><FaEnvelope /></a>
        </div>

        <p className="footer-rights">© 2025 IdeaFix. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
