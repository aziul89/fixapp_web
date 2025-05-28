import { useNavigate } from 'react-router-dom';

function EnvelopamentoMoveis() {
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

  // Colocar um aviso em cada formulário: medidas aproximadas, um de nossos colaboradores irá medir corretamente

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <h3>Envelopamento de Móveis</h3>

      <div className="form-group">
        <label>Tipo do móvel:</label>
        <input type="text" placeholder="Ex: Armário, Mesa, Guarda-roupa" required />
      </div>

      <div className="form-group">
        <label>Altura (m):</label>
        <input type="number" step="0.01" required /> cm
      </div>
      <div className="form-group">
        <label>Largura (m):</label>
        <input type="number" step="0.01" required /> cm
      </div>
      <div className="form-group">
        <label>Profundidade (m):</label>
        <input type="number" step="0.01" required /> cm
      </div>
      <div className="form-group">
        <label>Modelo do adesivo:</label>
        <select required>
          <option>Selecione</option>
          <option>Adesivo Liso</option>
          <option>Adesivo Madeira</option>
          <option>Adesivo Mármore</option>
          <option>Outro</option>
        </select>
      </div>

      <div className="button-container">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default EnvelopamentoMoveis;
