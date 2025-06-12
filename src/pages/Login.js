import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState("");

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validarEmail(email)) {
      setEmailError("Formato de email inválido.");
      return;
    } else {
      setEmailError("");
    }

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

  return (
    <div className="register-container">
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
            {emailError && <p className="error-text">{emailError}</p>}
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

      </div>
    </div>
  );
}

export default Login;

