import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ProgressBar from "../components/ProgressBar";

// ADD validações de campo

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-box">
        <ProgressBar step={1} /> {/* Barra de progresso */}
        <h2>Cadastre-se agora para contratar nossos serviços!</h2>
        <form>
          {/* Nome */}
          <div className="input-group">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" required />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" required />
          </div>

          {/* Telefone */}
          <div className="input-group">
            <label>Telefone</label>
            <input type="tel" placeholder="Digite seu telefone" required />
          </div>

          {/* Botão de próxima etapa */}
          <button className="register-button" onClick={() => navigate("/register2")}>Próximo</button>
        </form>

        <p className="login-text">
          Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
