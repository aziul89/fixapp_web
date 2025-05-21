import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Profile.css";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const dadosRecebidos = location.state;

  const [cliente, setCliente] = useState(dadosRecebidos?.cliente || {});
  const [endereco, setEndereco] = useState(dadosRecebidos?.endereco || {});
  const [servicos, setServicos] = useState([]); 

  // Puxar dados do backend
  useEffect(() => {
    if (cliente?.id) {
      // Fetchs

      // Simulação de histórico
      setServicos([
        { id: 1, nome: "Aplicação de película", data: "2025-04-20", status: "Concluído" },
      ]);
      
    }
  }, [cliente]);

  const handleEditarPerfil = () => {
    navigate("/editar-perfil", { state: { cliente, endereco } });
  };

  return (
    <div className="profile-container" >
        <div className="profile-box">
        <div className="profile-header">
            <h1>Meu Perfil</h1>
            <button className="edit-button" onClick={handleEditarPerfil}>
                Editar
            </button>
        </div>

        <section className="profile-section">
            <h2>Dados Pessoais</h2>
            <p><strong>Nome:</strong> {cliente.nome}</p>
            <p><strong>Email:</strong> {cliente.email}</p>
            <p><strong>Telefone:</strong> {cliente.telefone}</p>
            <p><strong>CPF:</strong> {cliente.cpf}</p>
        </section>

        <section className="profile-section">
            <h2>Endereço</h2>
            <p><strong>CEP:</strong> {endereco.cep}</p>
            <p><strong>Rua:</strong> {endereco.rua}</p>
            <p><strong>Número:</strong> {endereco.numero}</p>
            <p><strong>Complemento:</strong> {endereco.complemento}</p>
            <p><strong>Bairro:</strong> {endereco.bairro}</p>
            <p><strong>Cidade:</strong> {endereco.cidade}</p>
            <p><strong>Estado:</strong> {endereco.estado}</p>
        </section>

        <section className="profile-section">
            <h2>Histórico de Serviços</h2>
            {servicos.length > 0 ? (
            <ul>
                {servicos.map(servico => (
                <li key={servico.id}>
                    <strong>{servico.nome}</strong> - {servico.data} ({servico.status})
                </li>
                ))}
            </ul>
            ) : (
            <p>Nenhum serviço registrado ainda.</p>
            )}
        </section>

        
        </div>
    </div>
  );
}

export default Profile;
