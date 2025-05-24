import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();
  const { token, user, isAuthenticated } = useAuth();

  const [cliente, setCliente] = useState({});
  const [endereco, setEndereco] = useState({});
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      alert("Usuário não autenticado");
      navigate("/login");
      return;
    }

    const fetchCliente = async () => {
      try {
        const response = await fetch(`https://ideiafix-back-end-1test.onrender.com/api/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do cliente");
        }

        const data = await response.json();

        const clienteData = {
          id: data.id,
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          cpf: "", // Preencha se o backend trouxer
        };

        setCliente(clienteData);

        const clienteId = data.Cliente?.id;
if (clienteId) {
  fetchEndereco(clienteId);
}
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar cliente");
      }
    };

    const fetchEndereco = async (clienteId) => {
       console.log("clienteId recebido:", clienteId); 
      try {
        const response = await fetch(`https://ideiafix-back-end-1test.onrender.com/endere/cliente/${clienteId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar endereço");
        }

        const data = await response.json();

        if (data.length > 0) {
          setEndereco(data[0]); // Pega o primeiro endereço da lista
        } else {
          setEndereco({});
        }
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar endereço");
      }
    };

    fetchCliente();
  }, [isAuthenticated, navigate, token, user]);

  const handleEditarPerfil = () => {
    navigate("/editar-perfil", { state: { cliente, endereco } });
  };

  return (
    <div className="profile-container">
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
          <p><strong>CEP:</strong> {endereco.cep || "Não informado"}</p>
          <p><strong>Rua:</strong> {endereco.rua || "Não informado"}</p>
          <p><strong>Número:</strong> {endereco.numero || "Não informado"}</p>
          <p><strong>Complemento:</strong> {endereco.complemento || "Não informado"}</p>
          <p><strong>Bairro:</strong> {endereco.bairro || "Não informado"}</p>
          <p><strong>Cidade:</strong> {endereco.cidade || "Não informado"}</p>
          <p><strong>Estado:</strong> {endereco.estado || "Não informado"}</p>
        </section>

        <section className="profile-section">
          <h2>Histórico de Serviços</h2>
          {servicos.length > 0 ? (
            <ul>
              {servicos.map((servico) => (
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
