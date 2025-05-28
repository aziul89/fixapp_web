import { useNavigate } from 'react-router-dom';

function PlacaSinalizacao() {
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
      <h3>Placas de Sinalização</h3>

      <div className="form-group">
        <label>Material:</label>
        <select required>
          <option>Selecione</option>
          <option>PVC</option>
          <option>Acrílico</option>
        </select>
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
        <label>Quantidade:</label>
        <input type="number" required />
      </div>
      <div className="form-group">
        <label>Upload da arte:</label>
        <input type="file" required />
      </div>

      <div className="button-container">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default PlacaSinalizacao;
