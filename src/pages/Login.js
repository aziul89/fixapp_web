import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

// ADD impedimento ao ir para a próxima pág sem ter preenchido os campos corretamente
// Css próprio import styles/Login.css

function Login() {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Faça Login</h2>
        <form>
          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" required />
          </div>

          {/* Senha */}
          <div className="input-group">
            <label>Senha</label>
            <input type="text" placeholder="Digite sua senha" required />
          </div>

          {/* Botão de logar */}
          <button className="register-button" onClick={() => navigate("/")}>Entrar</button>
        </form>

        <p className="login-text">
          Não tem uma conta? <Link to="/register" className="login-link">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;