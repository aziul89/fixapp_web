
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [agendamentos, setAgendamentos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('link') // Substitua 'link' pela URL real da API
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
    <div className="dashboard-container">
      <h1 className="dashboard-title">Agendamentos</h1>

      <div className="dashboard-table">
        <div className="dashboard-row dashboard-header">
          <span>Cliente</span>
          <span>Serviço</span>
          <span>Data</span>
          <span>Horário</span>
          <span>Status</span>
        </div>

        {agendamentos.map((item) => (
          <div
            className="dashboard-row dashboard-clickable"
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

export default Dashboard;
