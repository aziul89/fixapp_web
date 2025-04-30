import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ProgressBar from "../components/ProgressBar";

// ADD validações

function Register3() {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-box">
      <ProgressBar step={3} /> {/* Barra de progresso */}
        <h2>Seu Endereço</h2>
        <form>

            {/* Endereço */}
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
          
          {/* Botão de finalização --> Ir para o Login*/}
          <button className="register-button" onClick={() => navigate("/login")}>
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
