import React, { useState } from 'react';
import "../styles/RecuperarSenha.css";

function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // fazer requisição ao backend
    setMensagem("Se este e-mail estiver cadastrado, enviaremos as instruções por ele.");
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-box">
        <h2>Recuperar Senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          <button className="recuperar-button" type="submit">Enviar</button>
        </form>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </div>
  );
}

export default RecuperarSenha;
