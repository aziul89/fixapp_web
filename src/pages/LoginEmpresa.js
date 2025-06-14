import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/newlogo_pink.png';
import "../styles/LoginEmpresa.css"; // Pode reutilizar o mesmo CSS

function LoginFuncionario() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ideiafix-back-end-1test.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro no login");
      }

      // Verifica se o usuário é FUNCIONÁRIO
      if (!data.user.Funcionario) {
        alert("Apenas funcionários podem acessar este painel.");
        return;
      }

      // Armazena token e dados
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redireciona para painel do funcionário
     navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Falha ao tentar logar");
    }
  };

  return (
    <div className="empresa-login-container">
      <div className="login-box">
        <img
          src={logo}
          alt="Logo da Empresa"
          className="logo-img"
        />
        <form onSubmit={handleSubmit}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="funcionario@exemplo.com"
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

export default LoginFuncionario;
