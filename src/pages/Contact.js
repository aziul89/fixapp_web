import React, { useState } from "react";
import "../styles/Contact.css";

// Enviar mensagem para o email da empresa

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-section">
          <h1>Entre em contato conosco</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group2">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group2">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group2">
              <label>Mensagem</label>
              <textarea
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-button">Enviar</button>
          </form>
        </div>
      </div>

      {/* Pop-up de confirmação */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Mensagem enviada! Entraremos em contato em breve.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
