import "../styles/ComoFunciona.css";
import { useNavigate } from "react-router-dom";

function ComoFunciona() {
  const navigate = useNavigate();

  return (
    <section className="como-funciona-container">
      <div className="como-funciona-content">
        <h1>Contrate Aplicação de Películas Sem Sair de Casa</h1>
        <p className="descricao">
          O <strong>IdeaFix</strong> é a plataforma ideal para quem busca <strong>praticidade, segurança</strong> e <strong>agilidade</strong> na hora de contratar serviços de aplicação de películas residenciais, comerciais ou automotivas.
        </p>

        <h2>Como funciona?</h2>
        <ul className="passos-lista">
          <li><span>✅</span> <strong>Crie sua conta:</strong> Em poucos cliques, você se cadastra e tem acesso completo à plataforma.</li>
          <li><span>✅</span> <strong>Escolha o serviço:</strong> Encontre o tipo de serviço ideal para sua necessidade: envelopamento de móveis, placas personalidades, película fumê e muito mais.</li>
          <li><span>✅</span> <strong>Personalize o pedido:</strong> Preencha um formulário rápido com as especificações do serviço: metragem, tipo de material, local de aplicação, etc.</li>
          <li><span>✅</span> <strong>Pague com segurança:</strong> Finalize com pagamento via cartão de crédito, débito ou Pix.</li>
          <li><span>✅</span> <strong>Conte com o FixBot:</strong> Nosso assistente virtual tira todas as suas dúvidas em tempo real!</li>
        </ul>

        <p className="final-texto">
          Simples, rápido e transparente. Com o IdeaFix, você contrata de forma digital e conta com profissionais especializados para transformar seu espaço.
        </p>

        <button className="como-funciona-button" onClick={() => navigate("/register")}>
          👉 Crie sua conta agora!
        </button>
      </div>
    </section>
  );
}

export default ComoFunciona;
