import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PlacaSinalizacao() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [material, setMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [altura, setAltura] = useState('');
  const [unidadeAltura, setUnidadeAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [unidadeLargura, setUnidadeLargura] = useState('');
  const [arquivo, setArquivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (token) {
      setShowPopup(true);
      setMaterial('');
      setQuantidade('');
      setAltura('');
      setUnidadeAltura('');
      setLargura('');
      setUnidadeLargura('');
      setArquivo('');
    } else {
      navigate('/register');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="service-form">
        <h3>Preencha os dados abaixo:</h3>

        <div className="form-group">
          <label>Material:</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option>PVC</option>
            <option>Acrílico</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantidade de placas:</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
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

        <div className="form-group">
          <label>Upload da arte:</label>
          <input
            type="file"
            value={arquivo}
            onChange={(e) => setArquivo(e.target.value)}
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

export default PlacaSinalizacao;
