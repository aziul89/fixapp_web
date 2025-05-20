import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/RecuperarSenha.css";

function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    // fazer requisição ao backend
    e.preventDefault();
    setMensagem("Se este e-mail estiver cadastrado, enviaremos um link para recuperar o acesso.");
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-box">
        <div className="icon-wrapper">
          <span className="lock-icon">🔒</span>
        </div>

        <h2 className="titulo">Problemas para entrar?</h2>
        <p className="descricao">
          Insira seu e-mail e enviaremos um link para você voltar a acessar sua conta.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="campo-email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="recuperar-button">
            Enviar
          </button>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        

        <div className="separador">
          <p> OU </p>
        </div>

        <div className="link-criar-conta">
          <Link to="/register">Criar nova conta</Link>
        </div>

        <div className="voltar-login">
          <Link to="/login">Voltar para login</Link>
        </div>
      </div>
    </div>
  );
}

export default RecuperarSenha;
