import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Cadastre-se agora para contratar nossos serviços!</h2>
        <form>
          {/* Nome */}
          <div className="input-group">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" required />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" required />
          </div>

          {/* Telefone */}
          <div className="input-group">
            <label>Telefone</label>
            <input type="tel" placeholder="Digite seu telefone" required />
          </div>

          {/* Endereço */}
          <div className="address-section">
            <h3>Endereço</h3>

            <div className="input-group">
              <label>Rua</label>
              <input type="text" placeholder="Digite o nome da rua" required />
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

          {/* Botão de envio */}
          <button type="submit" className="register-button">Cadastrar</button>
        </form>

        <p className="login-text">
          Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
