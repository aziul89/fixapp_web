import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    // Validação simples
    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos.");
      return;
    }

    navigate("/register2", {
      state: { nome, email, telefone },
    });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <ProgressBar step={1} />
        <h2>Cadastre-se agora para contratar nossos serviços!</h2>
        <form onSubmit={handleNext}>
          <div className="input-group">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
            <label>Telefone</label>
            <input type="tel" placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
          </div>

          <button className="register-button" type="submit">Próximo</button>
        </form>

        <p className="login-text">
          Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
