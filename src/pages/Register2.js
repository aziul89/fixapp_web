import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ProgressBar from "../components/ProgressBar";

function RegisterPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    // Se o cadastro for bem sucedido
    // ADD mecanismo eficiente
    alert("Cadastro finalizado com sucesso!");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-box">
      <ProgressBar step={2} /> {/* Adicionando a barra de progresso */}
        <h2>Crie sua senha </h2>
        <form onSubmit={handleSubmit}>

          {/* Senha */}
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirmar Senha */}
          <div className="input-group">
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Exibir erro se as senhas forem diferentes */}
          {error && <p className="error-message">{error}</p>}

          {/* Botão de próxima etapa */}
          <button className="register-button" onClick={() => navigate("/register3")}>Próximo</button>
        </form>

        <p className="login-text">
          Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPassword;
