import { useNavigate } from 'react-router-dom';

function AdesivoParede() {
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
      <h3>Adesivo de Parede Personalizado</h3>

      <div className="form-group">
        <label>Número de paredes:</label>
        <input type="mumber" required />
      </div>

      <div className="form-group">
        <label>Altura (m):</label>
        <input type="number" step="0.01" required />
      </div>
      <div className="form-group">
        <label>Largura (m):</label>
        <input type="number" step="0.01" required />
      </div>
      <div className="form-group">
        <label>Tipo de adesivo:</label>
        <select required>
          <option>Selecione</option>
          <option>Impressão Digital</option>
          <option>Liso</option>
          <option>Decorativo</option>
        </select>
      </div>

      <div className="button-container">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default AdesivoParede; 
