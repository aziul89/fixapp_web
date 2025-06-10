import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/newlogo_pink.png';
import "../styles/LoginEmpresa.css";

function LoginEmpresa() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de login
    if (email === "empresa@teste.com" && senha === "123456") {
      // Armazena role no localStorage ou AuthContext
      localStorage.setItem("user", JSON.stringify({ role: "empresa" }));
      navigate("/homedashboard");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="empresa-login-container">
      <div className="login-box">
        <img
          src={logo}  // ou caminho do logo
          alt="Logo da Empresa"
          className="logo-img"
        />
        <form onSubmit={handleSubmit}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="empresa@teste.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginEmpresa;
