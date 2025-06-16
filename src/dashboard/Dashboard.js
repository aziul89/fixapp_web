import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // importa o contexto
import './Dashboard.css';

function Dashboard() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [filtroStatus, setFiltroStatus] = useState("TODOS");
  const navigate = useNavigate();
  const { token, isAuthenticated } = useAuth(); // pega token

  useEffect(() => {
    if (!isAuthenticated) return;

    fetch('https://ideiafix-back-end-1test.onrender.com/orcamento', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar orçamentos');
        return res.json();
      })
      .then((data) => setAgendamentos(data))
      .catch((err) => {
        console.error(err);
        alert("Erro ao carregar Agendamentos");
      });
  }, [token, isAuthenticated]);

  const handleClick = (id) => {
    navigate(`/agendamentos/${id}`);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Agendamentos</h1>

      <div className="filtro-container">
        <label htmlFor="filtroStatus">Filtrar por Status:</label>
        <select
          id="filtroStatus"
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="TODOS">Todos</option>
          <option value="PENDENTE">Pendente</option>
          <option value="CONFIRMADO">Confirmado</option>
          <option value="CANCELADO">Cancelado</option>
          <option value="REJEITADO">Rejeitado</option>
        </select>
      </div>


      <div className="dashboard-table">
        <div className="dashboard-row dashboard-header">
          <span>Cliente</span>
          <span>Serviço</span>
          <span>Data</span>
          <span>Horário</span>
          <span>Status</span>
        </div>

        {agendamentos.length === 0 ? (
          <>
            {[...Array(5)].map((_, index) => (
              <div className="dashboard-row skeleton-row" key={index}>
                <span className="skeleton-box"></span>
                <span className="skeleton-box"></span>
                <span className="skeleton-box"></span>
                <span className="skeleton-box"></span>
                <span className="skeleton-box"></span>
              </div>
            ))}
          </>
        ) : (
          agendamentos
            .filter((item) => filtroStatus === "TODOS" || item.status === filtroStatus)
            .map((item) => (

            <div
              className="dashboard-row dashboard-clickable"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <span>{item.Cliente?.id}</span>
              <span>{item.servico?.nome}</span>
              <span>{new Date(item.dataServico).toLocaleDateString('pt-BR')}</span>
              <span>{item.horaServico}</span>
              <span>{item.status}</span>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Dashboard;
