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
  const [dataServico, setDataServico] = useState('');
  const [horaServico, setHoraServico] = useState('');
  const hoje = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (token) {
      const dados = {
        tipoServico: 'Envelopamento de Móveis',
        tipoMovel,
        altura,
        unidadeAltura,
        largura,
        unidadeLargura,
        profundidade,
        unidadeProfundidade,
        modeloAdesivo,
        corAdesivo,
        dataServico,
        horaServico,
      };

      try {
        const response = await fetch('http://localhost:8081/servicos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dados),
        });

        if (response.ok) {
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
          setDataServico('');
          setHoraServico('');
        } else {
          alert('Erro ao enviar os dados. Verifique os campos e tente novamente.');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao conectar com o servidor.');
      }
    } else {
      navigate('/register');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="service-form">
        <h3>Preencha os dados abaixo:</h3>

        <p className="form-warning">
          ⚠️ <strong>Observação:</strong> As medidas podem ser aproximadas. Um de nossos profissionais irá medir corretamente no local.
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
              style={{ flex: '2' }}
            />
            <select
              value={unidadeAltura}
              onChange={(e) => setUnidadeAltura(e.target.value)}
              required
              style={{ flex: '1' }}
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
              style={{ flex: '2' }}
            />
            <select
              value={unidadeLargura}
              onChange={(e) => setUnidadeLargura(e.target.value)}
              required
              style={{ flex: '1' }}
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
              <option value="">Unidade de medida</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
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

export default EnvelopamentoMoveis;
