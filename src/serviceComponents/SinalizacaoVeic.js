import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SinalizacaoVeiculo() {
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
          <label>Modelo do veículo:</label>
          <input type="text" placeholder="Ex: Onix, Saveiro, HR" required />
        </div>

        <div className="form-group">
          <label>Tipo de adesivo:</label>
          <select required>
            <option>Selecione</option>
            <option>Impressão Digital</option>
            <option>Recorte Eletrônico</option>
          </select>
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

export default SinalizacaoVeiculo;
