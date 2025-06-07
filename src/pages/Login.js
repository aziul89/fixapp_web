import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import "../styles/Captcha.css";
import Captcha from "../components/Captcha";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ideiafix-back-end-1test.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      if (!response.ok) {
        throw new Error("Falha no login");
      }

      const data = await response.json();

      login(data.token, data.user);
      navigate("/");
    } catch (error) {
      console.error("Erro ao logar:", error);
      alert("Email ou senha inválidos.");
    }
  };

  const handleCaptchaSuccess = () => {
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
      setCaptchaPassed(true);
    }, 1000); // 1 segundo de animação antes de exibir o login
  };

  return (
    <div className="register-container">
      {!captchaPassed && (
        <div className="captcha-overlay">
          <Captcha onSuccess={handleCaptchaSuccess} />
          
        </div>
      )}

      {captchaPassed && (
        <div className="register-box">
          <h2>Faça Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="register-button">Entrar</button>
          </form>

          <p className="login-text">
            Não tem uma conta? <Link to="/register" className="login-link">Cadastre-se</Link>
          </p>

          <p>
            <Link to="/recuperar-senha" className="forpassword-link">Esqueceu a senha?</Link>
          </p>

          <p className="admin-text">
            É um colaborador? <Link to="/" className="login-link">Clique aqui</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;

