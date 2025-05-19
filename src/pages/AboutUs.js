import "../styles/AboutUs.css";
import logopink from "../assets/newlogo_pink.png"

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1>Quem Somos <span>🤝</span></h1>
        <p>
          A <strong>IdeaFix</strong> é uma plataforma digital criada para facilitar a contratação de serviços de aplicação de películas em residências, comércios e veículos. Nosso objetivo é conectar você a profissionais especializados, garantindo conforto, segurança e praticidade sem sair de casa.
        </p>
        <p>
          Trabalhamos com diferentes tipos de películas: envelopamento de móveis, placas, veículos e muito mais. Tudo de forma rápida, intuitiva e digital.
        </p>

        <div className="aboutus-image-container">
        <img src={logopink} alt="Equipe IdeaFix" className="aboutus-image" />
      </div>

        <h2>Uma Iniciativa Universitária <span>🏫</span></h2>
        <p>
          Este projeto foi desenvolvido em parceria com alunos da <strong>Universidade Católica de Pernambuco</strong>, como parte de uma iniciativa educacional que une inovação, tecnologia e impacto social.
        </p>
        <p>
          Nossa missão é proporcionar uma experiência moderna, eficiente e transparente, enquanto valorizamos o aprendizado prático e colaborativo.
        </p>
        <p>
          Acreditamos que juntos podemos transformar o modo como você contrata serviços e ao mesmo tempo impulsionar o desenvolvimento profissional de jovens talentos.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
