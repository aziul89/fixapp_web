import "../styles/ComoFunciona.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ⬅️ importe o contexto

function ComoFunciona() {
  const navigate = useNavigate();
  const { user } = useAuth(); // ⬅️ recupera o usuário logado

  return (
    <section className="como-funciona-container">
      <div className="como-funciona-content">
        <h1>Contrate nossos serviços sem sair de casa!</h1>
        <p className="descricao">
          <strong>IdeaFix</strong> é a plataforma ideal para quem busca <strong>praticidade, segurança</strong> e <strong>agilidade</strong> na hora de contratar serviços de aplicação de películas residenciais, comerciais ou automotivas.
        </p>

        <h2>Como funciona?</h2>
        <table className="passos-tabela">
          <tbody>
            <tr>
              <td>✅</td>
              <td><strong>Crie sua conta:</strong> Em poucos cliques, você se cadastra e tem acesso completo à plataforma.</td>
            </tr>
            <tr>
              <td>✅</td>
              <td><strong>Escolha o serviço:</strong> Encontre o tipo de serviço ideal para sua necessidade: envelopamento de móveis, placas personalizadas, películas fumê e muito mais.</td>
            </tr>
            <tr>
              <td>✅</td>
              <td><strong>Personalize o pedido:</strong> Preencha um formulário rápido com as especificações do serviço: metragem, tipo de material, local de aplicação, etc.</td>
            </tr>
            <tr>
              <td>✅</td>
              <td><strong>Pague com segurança:</strong> Aguarde a confirmação do serviço e finalize com pagamento via cartão de crédito, débito ou Pix.</td>
            </tr>
            <tr>
              <td>✅</td>
              <td><strong>Conte com o FixBot:</strong> Nosso assistente virtual tira todas as suas dúvidas em tempo real!</td>
            </tr>
          </tbody>
        </table>

        <p className="final-texto">
          Simples, rápido e transparente. Com a IdeaFix, você contrata de forma digital e conta com profissionais especializados para transformar seu espaço.
        </p>

        {!user && (
          <button className="como-funciona-button" onClick={() => navigate("/register")}>
            👉 Crie sua conta agora!
          </button>
        )}
      </div>
    </section>
  );
}

export default ComoFunciona;

