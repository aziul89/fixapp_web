import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Conteúdo Principal */}
      <main className="content">
        <section id="quem-somos" className="section">
          <h2>Quem Somos</h2>
          <p>Transformando superfícies com eficiência, beleza e inovação.</p>
        </section>

        <section id="compromisso" className="section">
          <h2>Nosso Compromisso</h2>
          <p>
            A nossa empresa é especializada em aplicar películas de alta qualidade em diversas superfícies. Seja para decorar, melhorar a eficiência energética ou garantir mais privacidade, nossos serviços oferecem soluções personalizadas para atender às suas necessidades.
          </p>
        </section>

        <section id="o-que-fazemos" className="section">
          <h2>O que Fazemos</h2>
          <ul>
            <li><strong>Decoração:</strong> Transforme o ambiente com películas decorativas exclusivas.</li>
            <li><strong>Privacidade:</strong> Películas para garantir sua privacidade em qualquer ambiente.</li>
            <li><strong>Eficiência:</strong> Reduza custos com a aplicação de películas que protegem contra o calor.</li>
          </ul>
        </section>

        <section id="solicitar-servico" className="section">
          <h2>Solicite o Serviço</h2>
          <p>
            Agora, você pode solicitar nosso serviço completo diretamente através deste site! Basta preencher o formulário de solicitação, e nossa equipe estará pronta para realizar o trabalho com a máxima qualidade e eficiência.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;