import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PlacaAcrilico() {
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

        <div className="form-group">
          <label>Cor do acrílico:</label>
          <input type="text" required />
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
        <div className="form-group">
          <label>Upload da logomarca:</label>
          <input type="file" required />
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

export default PlacaAcrilico;
