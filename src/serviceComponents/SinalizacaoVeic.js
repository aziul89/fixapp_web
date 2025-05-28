import { useNavigate } from 'react-router-dom';

function SinalizacaoVeiculo() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/confirmacao');
    } else {
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <h3>Sinalização de Veículo</h3>

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
        <label>Área da aplicação (Altura x Largura ou m^2):</label>
        <input type="text" placeholder="Ex: 2,00 x 3,00 metros" required />
      </div>

      <div className="button-container">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default SinalizacaoVeiculo;
