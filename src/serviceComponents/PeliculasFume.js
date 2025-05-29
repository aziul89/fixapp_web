import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PelículaFume() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      setShowPopup(true);
    } else {
      navigate('/register');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="service-form">
        <h3>Preencha os dados abaixo:</h3>

        <p className="form-warning">
          ⚠️ <strong>Observação: </strong>As medidas podem ser aproximadas. Um de nossos colaboradores irá medir corretamente no local.
        </p>

        <div className="form-group">
          <label>Densidade da película:</label>
          <input type="text" placeholder="Ex: 35%, 50%" required />
        </div>

        <div className="form-group">
          <label>Local de aplicação:</label>
          <input type="text" placeholder="Ex: Vidro automotivo, fachada, residência" required />
        </div>

        <div className="form-group">
            <label>Altura:</label>
            <div className="input-row">
              <input type="text" required style={{ flex: '2' }} />
              <select required style={{ flex: '1' }}>
                <option value="">Unidade de medida</option>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Largura:</label>
            <div className="input-row">
              <input type="text" required style={{ flex: '2' }} />
              <select required style={{ flex: '1' }}>
                <option value="">Unidade de medida</option>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
              </select>
            </div>
          </div>

        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Mensagem</h2>
            <p>Seu agendamento está em análise, em breve devolveremos uma resposta!</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PelículaFume;
