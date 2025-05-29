import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EnvelopamentoMoveis() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [tipoMovel, setTipoMovel] = useState('');
  const [altura, setAltura] = useState('');
  const [unidadeAltura, setUnidadeAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [unidadeLargura, setUnidadeLargura] = useState('');
  const [profundidade, setProfundidade] = useState('');
  const [unidadeProfundidade, setUnidadeProfundidade] = useState('');
  const [modeloAdesivo, setModeloAdesivo] = useState('');
  const [corAdesivo, setCorAdesivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (token) {
      setShowPopup(true);

      setTipoMovel('');
      setAltura('');
      setUnidadeAltura('');
      setLargura('');
      setUnidadeLargura('');
      setProfundidade('');
      setUnidadeProfundidade('');
      setModeloAdesivo('');
      setCorAdesivo('');

    } else {
      navigate('/register');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="service-form">
        <h3>Preencha os dados abaixo:</h3>

        <p className="form-warning">
          ⚠️ As medidas são aproximadas. Um de nossos colaboradores irá medir corretamente no local.
        </p>

        <div className="form-group">
          <label>Tipo do móvel:</label>
          <input
            type="text"
            value={tipoMovel}
            onChange={(e) => setTipoMovel(e.target.value)}
            placeholder="Ex: Armário, Mesa, Guarda-roupa"
            required
          />
        </div>

        <div className="form-group">
          <label>Altura:</label>
          <div className="input-row">
            <input
              type="text"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
              style={{ flex: '2' }}
            />
            <select
              value={unidadeAltura}
              onChange={(e) => setUnidadeAltura(e.target.value)}
              required
              style={{ flex: '1' }}
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
              style={{ flex: '2' }}
            />
            <select
              value={unidadeLargura}
              onChange={(e) => setUnidadeLargura(e.target.value)}
              required
              style={{ flex: '1' }}
            >
              <option value="">Unidade</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Profundidade:</label>
          <div className="input-row">
            <input
              type="text"
              value={profundidade}
              onChange={(e) => setProfundidade(e.target.value)}
              required
              style={{ flex: '2' }}
            />
            <select
              value={unidadeProfundidade}
              onChange={(e) => setUnidadeProfundidade(e.target.value)}
              required
              style={{ flex: '1' }}
            >
              <option value="">Unidade</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Modelo do adesivo:</label>
          <select
            value={modeloAdesivo}
            onChange={(e) => setModeloAdesivo(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Adesivo Liso">Adesivo Liso</option>
            <option value="Adesivo Madeira">Adesivo Madeira</option>
            <option value="Adesivo Mármore">Adesivo Mármore</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cor do adesivo:</label>
          <input
            type="text"
            value={corAdesivo}
            onChange={(e) => setCorAdesivo(e.target.value)}
            required
          />
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

export default EnvelopamentoMoveis;
