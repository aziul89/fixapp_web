import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

function Register3() {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");

  // Função para buscar o endereço pelo CEP
  const buscarEndereco = async (cepDigitado) => {
    const cepLimpo = cepDigitado.replace(/\D/g, "");

    if (cepLimpo.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setRua(data.logradouro || "");
        setBairro(data.bairro || "");
        setCidade(data.localidade || "");
        setEstado(data.uf || "");
      } else {
        alert("CEP não encontrado.");
      }
    } catch (err) {
      console.error("Erro ao buscar CEP:", err);
      alert("Erro ao buscar o endereço.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert("Você precisa aceitar os termos para continuar.");
      return;
    }

    // Aqui você pode juntar os dados das etapas anteriores + endereço para enviar ao backend
    const endereco = {
      cep,
      rua,
      bairro,
      cidade,
      estado,
      complemento,
    };

    console.log("Dados de endereço:", endereco);
    // salvar no backend ou em localStorage/sessionStorage se necessário

    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <ProgressBar step={3} />
        <h2>Seu Endereço</h2>
        <form onSubmit={handleSubmit}>
          <div className="address-section">
            <div className="input-group">
              <label>CEP</label>
              <input
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onBlur={() => buscarEndereco(cep)}
                required
              />
            </div>

            <div className="input-group">
              <label>Rua</label>
              <input
                type="text"
                placeholder="Digite o nome da rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Bairro</label>
              <input
                type="text"
                placeholder="Digite o nome do bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Complemento</label>
              <input
                type="text"
                placeholder="Apto, bloco, etc. (opcional)"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>

            <div className="address-row">
              <div className="input-group">
                <label>Cidade</label>
                <input
                  type="text"
                  placeholder="Digite sua cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Estado</label>
                <input
                  type="text"
                  placeholder="Digite seu estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="termos"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="termos">
              Eu concordo com os <a href="/termos" target="_blank" rel="noopener noreferrer">Termos de Serviço</a> e a <a href="/privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.
            </label>
          </div>

          <button type="submit" className="register-button">
            Finalizar Cadastro
          </button>
        </form>

        <p className="login-text">
          Já tem conta? <Link to="/login" className="login-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register3;
