import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeDashboard.css';

function HomeDashboard() {
  const [agendamentos, setAgendamentos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('link')
      .then((res) => res.json())
      .then((data) => {
        setAgendamentos(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar agendamentos:', error);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/agendamentos/${id}`);
  };

  return (
    <div className="home-container">
      <h1 className="title">Agendamentos</h1>

      <div className="tabela">
        <div className="linha header">
          <span>Cliente</span>
          <span>Serviço</span>
          <span>Data</span>
          <span>Horário</span>
          <span>Status</span>
        </div>

        {agendamentos.map((item) => (
          <div
            className="linha clickable"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <span>{item.cliente}</span>
            <span>{item.servico}</span>
            <span>{item.data}</span>
            <span>{item.horario}</span>
            <span>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeDashboard;
