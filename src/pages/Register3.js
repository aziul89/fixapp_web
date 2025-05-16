import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

function Register3() {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert("Você precisa aceitar os termos para continuar.");
      return;
    }
    // salvar dados no backend
    
    navigate("/login"); 
  };

  // ADD validações de campo

  return (
    <div className="register-container">
      <div className="register-box">
        <ProgressBar step={3} /> {/* Barra de progresso */}
        <h2>Seu Endereço</h2>
        <form onSubmit={handleSubmit}>
          <div className="address-section">
            <div className="input-group">
              <label>CEP</label>
              <input type="number" placeholder="Digite o CEP" required />
            </div>

            <div className="input-group">
              <label>Rua</label>
              <input type="text" placeholder="Digite o nome da rua" required />
            </div>

            <div className="input-group">
              <label>Bairro</label>
              <input type="text" placeholder="Digite o nome do bairro" required />
            </div>

            <div className="input-group">
              <label>Complemento</label>
              <input type="text" placeholder="Apto, bloco, etc. (opcional)" />
            </div>

            <div className="address-row">
              <div className="input-group">
                <label>Cidade</label>
                <input type="text" placeholder="Digite sua cidade" required />
              </div>

              <div className="input-group">
                <label>Estado</label>
                <input type="text" placeholder="Digite seu estado" required />
              </div>
            </div>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="termos"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="termos">
              Eu concordo com os <a href="/termos" target="_blank" rel="noopener noreferrer">Termos de Serviço</a> e a <a href="/privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.
            </label>
          </div>

          <button type="submit" className="register-button">
            Finalizar Cadastro
          </button>
        </form>

        <p className="login-text">
          Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register3;
