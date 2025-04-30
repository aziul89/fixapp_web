import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useAuth } from '../context/AuthContext';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Ao recarregar não voltar para o "deslogado"
  const handleLogin = (e) => {
    // validar com o backend
    e.preventDefault(); 
    login();            
    navigate("/");      
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Faça Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" required />
          </div>

          {/* Senha */}
          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" required />
          </div>

          {/* Botão de logar */}
          <button type="submit" className="register-button">Entrar</button>
        </form>

        <p className="login-text">
          Não tem uma conta? <Link to="/register" className="login-link">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
