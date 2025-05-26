import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/ServiceDetail.css'

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://ideiafix-back-end-1test.onrender.com/services/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar serviço');
        }
        return response.json();
      })
      .then(data => {
        setService(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando serviço...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!service) return <p>Serviço não encontrado.</p>;

  return (
    <div className="service-detail">
      <div className="service-info">
        <h2>{service.nome}</h2>
        <p><strong>Descrição:</strong> {service.descricao}</p>
        <img
          src={service.imgUrl || 'https://via.placeholder.com/400x400?text=SEM+IMAGEM'}
          alt={service.nome}
        />
      </div>

      <div className="service-form">
        <h3>Formulário</h3>

        <div className="form-section">
          <p><strong>Preencha as medidas do objeto</strong></p>

          <div className="input-row">
            <div className="form-group">
              <label>Altura:</label>
              <input type="number" placeholder="Digite aqui" /> cm
            </div>
            <div className="form-group">
              <label>Largura:</label>
              <input type="number" placeholder="Digite aqui" /> cm
            </div>
            <div className="form-group">
              <label>Espessura:</label>
              <input type="number" placeholder="Digite aqui" /> cm
            </div>
          </div>
        </div>

        <div className="form-section">
          <p><strong>Escolha data e hora do serviço</strong></p>

          <div className="input-row">
            <div className="form-group">
              <label>Data:</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Hora:</label>
              <input type="time" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Tipo do material:</label>
            <select>
              <option>Selecione</option>
              <option>Vidro</option>
              <option>Película</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label>Cor desejada:</label>
            <select>
              <option>Selecione</option>
              <option>Incolor</option>
              <option>Fumê</option>
              <option>Espelhado</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label>Upload de imagens:</label>
            <input type="file" />
          </div>
        </div>

        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>

      </div>
    </div>
  );
}

export default ServiceDetail;
