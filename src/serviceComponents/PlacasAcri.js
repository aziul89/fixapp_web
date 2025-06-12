import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PlacaAcrilico() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [quantidade, setQuantidade] = useState('');
  const [cor, setCor] = useState('');
  const [altura, setAltura] = useState('');
  const [unidadeAltura, setUnidadeAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [unidadeLargura, setUnidadeLargura] = useState('');
  const [arquivo, setArquivo] = useState('');
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

  const formData = new FormData();
  formData.append('cor', cor);
  formData.append('altura', altura);
  formData.append('unidadeAltura', unidadeAltura);
  formData.append('largura', largura);
  formData.append('unidadeLargura', unidadeLargura);
  formData.append('dataServico', dataServico);
  formData.append('horaServico', horaServico);
  formData.append('arquivo', arquivo); // precisa que backend aceite upload
  formData.append('servico', 'Placa de Acrílico'); 
  formData.append('cliente', 'Nome do cliente');

  try {
    const response = await fetch('https://seu-backend.com/agendamentos', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      setShowPopup(true);
      setCor('');
      setAltura('');
      setUnidadeAltura('');
      setLargura('');
      setUnidadeLargura('');
      setArquivo('');
      setDataServico('');
      setHoraServico('');
    } else {
      alert('Erro ao enviar agendamento.');
    }
  } catch (error) {
    console.error('Erro no envio:', error);
  }
};

  return (
    <>
      <form onSubmit={handleSubmit} className="service-form">
        <h3>Preencha os dados abaixo:</h3>
        
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
          <label>Cor do acrílico:</label>
          <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Upload da logomarca:</label>
          <div className="file-upload">
            <label htmlFor="file-upload" className="upload-button">
              Selecionar arquivo
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={(e) => setArquivo(e.target.files[0])}
              required
            />
            {arquivo && <span className="file-name">{arquivo.name}</span>}
          </div>
        </div>

      <div className="form-section">
        <p><strong>Informe as dimensões do objeto</strong></p>

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

        <div className="form-section">
          <p><strong>Quando o serviço deve estar pronto?</strong></p>

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

export default PlacaAcrilico;
