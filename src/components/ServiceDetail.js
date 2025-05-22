import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://seu-backend/${id}`) // url API 
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
      <h2>{service.title}</h2>
      <img src={service.img} alt={service.title} style={{ maxWidth: '100%' }} />
      <p>{service.description}</p>
    </div>
  );
}

export default ServiceDetail;
