import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Register.css";
import ProgressBar from "../components/ProgressBar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const { nome, email, telefone } = location.state || {};

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); // Limpa erro anterior

    if (!password || !confirmPassword) {
      setError("Preencha os dois campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    if (!nome || !email || !telefone) {
      alert("Dados incompletos. Volte e preencha o cadastro corretamente.");
      return;
    }

    const cliente = {
      nome,
      email,
      telefone,
      senha: password,
      Cliente: {}, // Se o backend precisa desse objeto vazio, mantem
    };

    try {
      const response = await fetch("http://localhost:3000/api", {  // Ajuste a URL conforme seu backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Erro ao cadastrar cliente");
      }

      const data = await response.json();
      // Supondo que o ID do cliente esteja em data.id, ajuste conforme retorno do backend
      console.log("Resposta do servidor:", data);
    navigate("/register3", { state: { clienteId: data.Cliente.id } });
    } catch (err) {
      console.error(err);
      setError("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <ProgressBar step={2} />
        <h2>Crie sua senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group password-group">
            <label>Senha</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-group password-group">
            <label>Confirmar Senha</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ cursor: "pointer" }}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button className="register-button" type="submit">
            Próximo
          </button>
        </form>

        <p className="login-text">
          Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPassword;
