import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AgendamentoDetail.css';

function AgendamentoDetail() {
  const { id } = useParams();
  const { token, isAuthenticated } = useAuth();
  const [agendamento, setAgendamento] = useState(null);
  const [novoStatus, setNovoStatus] = useState('');
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;

    fetch(`https://ideiafix-back-end-1test.onrender.com/orcamento/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar agendamento");
        return res.json();
      })
      .then((data) => {
        setAgendamento(data);
        setNovoStatus(data.status);
      })
      .catch((error) => {
        console.error('Erro ao buscar agendamento:', error);
      });
  }, [id, token, isAuthenticated]);

  const handleStatusChange = (e) => {
    setNovoStatus(e.target.value);
  };

  const salvarStatus = async () => {
    try {
      const response = await fetch(`https://ideiafix-back-end-1test.onrender.com/orcamento/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: novoStatus }),
      });

      if (!response.ok) throw new Error('Erro ao atualizar status');

      const dataAtualizada = await response.json();
      setAgendamento(dataAtualizada);
      setEditando(false);
      alert("Status atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      alert("Erro ao atualizar status");
    }
  };

  if (!agendamento) return <div>Carregando...</div>;

  const {
    servico,
    material,
    Cliente,
    dataServico,
    horaServico,
    valorTotal,
    precoUnitario,
    altura,
    unidadeAltura,
    largura,
    unidadeLargura,
    observacoes,
    dadosExtras,
  } = agendamento;

  const nomeCliente = Cliente?.Usuario?.nome;
  const emailCliente = Cliente?.Usuario?.email;
  const telefoneCliente = Cliente?.Usuario?.telefone;
  const endereco = Cliente?.endereco?.[0];

  return (
    <div className="detail-container">
      <h1>{servico?.nome}</h1>

      <div className="imagens">
        <img src={servico?.imgUrl} alt="Imagem do serviço" />
      </div>

      <div className="info">

        <h2>Informações do Cliente</h2>
        <p><strong>Nome:</strong> {nomeCliente}</p>
        <p><strong>Email:</strong> {emailCliente}</p>
        <p><strong>Telefone:</strong> {telefoneCliente}</p>

        <h2>Endereço</h2>
        {endereco ? (
          <>
            <p><strong>Rua:</strong> {endereco.rua}, {endereco.complemento}</p>
            <p><strong>Bairro:</strong> {endereco.bairro}</p>
            <p><strong>Cidade:</strong> {endereco.cidade} - {endereco.estado}</p>
            <p><strong>CEP:</strong> {endereco.cep}</p>
          </>
        ) : (
          <p>Endereço não informado</p>
        )}

        <h2>Detalhes do Serviço</h2>
        <p><strong>Tipo do Móvel:</strong> {dadosExtras?.tipoMovel}</p>
        <p><strong>Cor do Adesivo:</strong> {dadosExtras?.corAdesivo}</p>
        <p><strong>Modelo:</strong> {dadosExtras?.modeloAdesivo}</p>
        <p><strong>Profundidade:</strong> {dadosExtras?.profundidade} {dadosExtras?.unidadeProfundidade}</p>
        <p><strong>Largura:</strong> {largura} {unidadeLargura}</p>
        <p><strong>Altura:</strong> {altura} {unidadeAltura}</p>
        <p><strong>Material:</strong> {material?.nome}</p>
        <p><strong>Preço Unitário:</strong> R$ {precoUnitario.toFixed(2)}</p>
        <p><strong>Valor Total:</strong> R$ {valorTotal.toFixed(2)}</p>
        <p><strong>Data:</strong> {new Date(dataServico).toLocaleDateString("pt-BR")}</p>
        <p><strong>Horário:</strong> {horaServico}</p>

        <p><strong>Status:</strong></p>
        {editando ? (
          <>
            <select value={novoStatus} onChange={handleStatusChange}>
              <option value="PENDENTE">PENDENTE</option>
              <option value="CONFIRMADO">CONFIRMADO</option>
              <option value="CANCELADO">CANCELADO</option>
              <option value="REJEITADO">REJEITADO</option>
            </select>
            <button onClick={salvarStatus}>Salvar</button>
            <button onClick={() => setEditando(false)}>Cancelar</button>
          </>
        ) : (
          <>
            <p>{agendamento.status}</p>
            <button onClick={() => setEditando(true)}>Editar Status</button>
          </>
        )}

        <p><strong>Observações:</strong> {observacoes || "Nenhuma"}</p>
      </div>
    </div>
  );
}

export default AgendamentoDetail;
