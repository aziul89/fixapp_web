import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SinalizacaoVeiculo() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [modelo, setModelo] = useState('');
  const [tipoAdesivo, setTipoAdesivo] = useState('');
  const [altura, setAltura] = useState('');
  const [unidadeAltura, setUnidadeAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [unidadeLargura, setUnidadeLargura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (token) {
      setShowPopup(true);
      setModelo('');
      setTipoAdesivo('');
      setAltura('');
      setUnidadeAltura('');
      setLargura('');
      setUnidadeLargura('');
    } else {
      navigate('/register');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="service-form">
        <h3>Preencha os dados abaixo:</h3>

        <p className="form-warning">
          ⚠️ <strong>Observação:</strong> As medidas podem ser aproximadas. Um de nossos colaboradores irá medir corretamente no local.
        </p>

        <div className="form-group">
          <label>Modelo do veículo:</label>
          <input
            type="text"
            placeholder="Ex: Onix, Saveiro, HR"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de adesivo:</label>
          <select
            value={tipoAdesivo}
            onChange={(e) => setTipoAdesivo(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option>Impressão Digital</option>
            <option>Recorte Eletrônico</option>
          </select>
        </div>

        <div className="form-group">
          <label>Altura:</label>
          <div className="input-row">
            <input
              type="text"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
            <select
              value={unidadeAltura}
              onChange={(e) => setUnidadeAltura(e.target.value)}
              required
            >
              <option value="">Unidade</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Largura:</label>
          <div className="input-row">
            <input
              type="text"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
              required
            />
            <select
              value={unidadeLargura}
              onChange={(e) => setUnidadeLargura(e.target.value)}
              required
            >
              <option value="">Unidade</option>
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

