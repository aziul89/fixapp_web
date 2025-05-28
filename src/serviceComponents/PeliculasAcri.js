import { useNavigate } from 'react-router-dom';

function PlacaAcrilico() {
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
      <h3>Placa em Acrílico</h3>

      <div className="form-group">
        <label>Cor do acrílico:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>Tamanho da placa (cm):</label>
        <input type="number" placeholder="Ex: 60cm x 40cm" required />
      </div>
      <div className="form-group">
        <label>Upload da logomarca:</label>
        <input type="file" required />
      </div>

      <div className="button-container">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default PlacaAcrilico;
