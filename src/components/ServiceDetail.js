import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/ServiceDetail.css';

import EnvelopamentoMoveis from '../serviceComponents/EnvelopMoveis';
import AdesivoParede from '../serviceComponents/AdesivosParede';
import PlacaAcrilico from '../serviceComponents/PlacasAcri';
import SinalizacaoVeiculo from '../serviceComponents/SinalizacaoVeic';
import PlacaSinalizacao from '../serviceComponents/PlacasSinal';
import PeliculaFume from '../serviceComponents/PeliculasFume';

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const normalize = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

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

  if (loading) {
    return (
      <div class="spinner-container">
        <div class="spinner"></div>
        <p>Buscando informações...</p>
      </div>
    );
  }
  if (error) return <p>Erro: {error}</p>;
  if (!service) return <p>Serviço não encontrado.</p>;

  const renderForm = () => {
    const nome = normalize(service.nome);

      if (nome === "envelopamento de moveis") {
        return <EnvelopamentoMoveis service={service} />;
      }

      if (nome === "adesivos de parede personalizados") {
        return <AdesivoParede service={service} />;
      }

      if (nome === "placas em acrilico") {
        return <PlacaAcrilico service={service} />;
      }

      if (nome === "sinalizacao de veiculos") {
        return <SinalizacaoVeiculo service={service} />;
      }

      if (nome === "placas de sinalizacao em pvc") {
        return <PlacaSinalizacao service={service} />;
      }

      if (nome === "aplicacao de pelicula fume") {
        return <PeliculaFume service={service} />;
      }

      return <p>Serviço indisponível.</p>;

  };

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

      {renderForm()}
    </div>
  );
}

export default ServiceDetail;

