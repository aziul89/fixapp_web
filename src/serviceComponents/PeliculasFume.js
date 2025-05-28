import { useNavigate } from 'react-router-dom';

function PelículaFume() {
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
      <h3>Aplicação de Película Fumê</h3>

      <div className="form-group">
        <label>Tipo/Densidade da película:</label>
        <input type="text" placeholder="Ex: 35%, 50%" required />
      </div>

      <div className="form-group">
        <label>Local de aplicação:</label>
        <input type="text" placeholder="Ex: Vidro automotivo, fachada, residência" required />
      </div>

      <div className="form-group">
        <label>Área da aplicação (Altura x Largura ou metros quadrados):</label>
        <input type="text" placeholder="Ex: 2,00 x 3,00 metros" required />
      </div>

      <div className="button-container">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default PelículaFume;
