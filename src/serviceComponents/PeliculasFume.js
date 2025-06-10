import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PeliculaFume() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [densidade, setDensidade] = useState('');
  const [local, setLocal] = useState('');
  const [altura, setAltura] = useState('');
  const [unidadeAltura, setUnidadeAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [unidadeLargura, setUnidadeLargura] = useState('');
  const [dataServico, setDataServico] = useState('');
  const [horaServico, setHoraServico] = useState('');
  const hoje = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');

  if (!token) {
    navigate('/register');
    return;
  }

  const payload = {
    densidade,
    local,
    altura,
    unidadeAltura,
    largura,
    unidadeLargura,
    dataServico,
    horaServico
  };

  try {
    const response = await fetch('http://localhost:3001/pelicula-fume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setShowPopup(true);
      setDensidade('');
      setLocal('');
      setAltura('');
      setUnidadeAltura('');
      setLargura('');
      setUnidadeLargura('');
      setDataServico('');
      setHoraServico('');
    } else {
      console.error('Erro ao enviar dados:', await response.text());
    }
  } catch (error) {
    console.error('Erro de rede:', error);
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
          <label>Densidade da película:</label>
          <input
            type="text"
            value={densidade}
            onChange={(e) => setDensidade(e.target.value)}
            placeholder="Ex: 35%, 50%"
            required
          />
        </div>

        <div className="form-group">
          <label>Local de aplicação:</label>
          <input
            type="text"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            placeholder="Ex: Vidro automotivo, fachada, residência"
            required
          />
        </div>

      <div className="form-section">
        <p><strong>Informe as dimensões da área de aplicação</strong></p>

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
              <option value="">Unidade de medida</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>
      </div>

        <div className="form-section">
          <p><strong>Data e hora do serviço</strong></p>

          <div className="input-row">
            <div className="form-group">
              <label>Data:</label>
              <input
                type="date"
                min={hoje}
                value={dataServico}
                onChange={(e) => setDataServico(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Hora:</label>
              <input
                type="time"
                value={horaServico}
                onChange={(e) => setHoraServico(e.target.value)}
                required
              />
            </div>
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

export default PeliculaFume;
