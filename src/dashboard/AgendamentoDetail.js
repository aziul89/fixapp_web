import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // importa o contexto
import './AgendamentoDetail.css';

function AgendamentoDetail() {
  const { id } = useParams();
  const { token, isAuthenticated } = useAuth(); // pega token e estado de auth
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
          Authorization: `Bearer ${token}`, // inclui token aqui também
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

  if (!agendamento) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Carregando...</p>
      </div>
    );
  }

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
        {dadosExtras?.tipoMovel && (
          <p><strong>Tipo do Móvel:</strong> {dadosExtras.tipoMovel}</p>
        )}

        {dadosExtras?.corAdesivo && (
          <p><strong>Cor do Adesivo:</strong> {dadosExtras.corAdesivo}</p>
        )}

        {dadosExtras?.modeloAdesivo && (
          <p><strong>Modelo:</strong> {dadosExtras.modeloAdesivo}</p>
        )}

        {dadosExtras?.profundidade && (
          <p><strong>Profundidade:</strong> {dadosExtras.profundidade} {dadosExtras.unidadeProfundidade}</p>
        )}

        {largura && (
          <p><strong>Largura:</strong> {largura} {unidadeLargura}</p>
        )}

        {altura && (
          <p><strong>Altura:</strong> {altura} {unidadeAltura}</p>
        )}

        {material?.nome && (
          <p><strong>Material:</strong> {material.nome}</p>
        )}

        {precoUnitario !== null && precoUnitario !== undefined && (
          <p><strong>Preço Unitário:</strong> R$ {precoUnitario.toFixed(2)}</p>
        )}

        {valorTotal !== null && valorTotal !== undefined && (
          <p><strong>Valor Total:</strong> R$ {valorTotal.toFixed(2)}</p>
        )}

        {dataServico && (
          <p><strong>Data:</strong> {new Date(dataServico).toLocaleDateString("pt-BR")}</p>
        )}

        {horaServico && (
          <p><strong>Horário:</strong> {horaServico}</p>
        )}


        <div className="status-line">
          <strong>Status:</strong>
          {editando ? (
            <>
              <select value={novoStatus} onChange={handleStatusChange}>
                <option value="PENDENTE">PENDENTE</option>
                <option value="CONFIRMADO">CONFIRMADO</option>
                <option value="CANCELADO">CANCELADO</option>
                <option value="REJEITADO">REJEITADO</option>
              </select>
              <button className="btn-save" onClick={salvarStatus}>Salvar</button>
              <button className="btn-cancel" onClick={() => setEditando(false)}>Cancelar</button>
            </>
          ) : (
            <>
              <span>{agendamento.status}</span>
              <button className="btn-default" onClick={() => setEditando(true)}>Editar</button>
            </>
          )}
        </div>


        {observacoes && observacoes.trim() !== '' && (
          <p><strong>Observações:</strong> {observacoes}</p>
        )}

      </div>
    </div>
  );
}

export default AgendamentoDetail;
