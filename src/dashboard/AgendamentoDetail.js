import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AgendamentoDetail.css';

function AgendamentoDetail() {
  const { id } = useParams();
  const [agendamento, setAgendamento] = useState(null);

  useEffect(() => {
    fetch(`https://sua-api.com/agendamentos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAgendamento(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar agendamento:', error);
      });
  }, [id]);

  if (!agendamento) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detail-container">
      <h1>{agendamento.servico}</h1>

      {/* Imagens (pode adaptar o nome do campo conforme sua API) */}
      <div className="imagens">
        {agendamento.imagens?.map((url, index) => (
          <img key={index} src={url} alt={`Imagem ${index + 1}`} />
        ))}
      </div>

      <div className="info">
        <p><strong>Cliente:</strong> {agendamento.cliente}</p>
        <p><strong>Data:</strong> {agendamento.data}</p>
        <p><strong>Horário:</strong> {agendamento.horario}</p>
        <p><strong>Status:</strong> {agendamento.status}</p>
        <p><strong>Descrição:</strong> {agendamento.descricao}</p>
      </div>
    </div>
  );
}

export default AgendamentoDetail;
