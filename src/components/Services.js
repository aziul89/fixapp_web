// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; 

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Portfolio from "./Portfolio";
import "../styles/CarouselServ.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
};

const services = [
  {
    img: "https://img.freepik.com/fotos-premium/trabalhador-de-servico-automovel-aplicando-nano-revestimento-em-um-detalhe-do-carro_179755-10517.jpg",
    title: "Sinalização de Veículos",
    description: "Personalização de carros e frotas com adesivos ou envelopamento para fins promocionais, identificação ou comunicação visual."
  },
  {
    img: "https://img.freepik.com/vetores-gratis/colecao-ilustracao-vetorial-de-trofeus-de-vidro-modernos-premios_1441-209.jpg",
    title: "Placas em Acrílico",
    description: "Perfeitas para identificação e decoração, com visual moderno e elegante, podendo ser personalizadas com impressão ou gravação."
  },
  {
    img: "https://img.freepik.com/fotos-gratis/balcao-de-cozinha-moderno-de-renderizacao-3d-com-design-branco-e-biege_105762-2228.jpg",
    title: "Envelopamento de Móveis",
    description: "Revestimento decorativo que renova móveis com rapidez e economia. Disponível em diversas cores e texturas."
  },
  {
    img: "https://img.freepik.com/fotos-premium/tingimento-do-carro-trabalhador-aplicando-folha-de-tingimento-na-janela-do-carro_473712-4471.jpg",
    title: "Aplicação de Película Fumê",
    description: "Reduz a entrada de luz solar, aumenta a privacidade e melhora o conforto térmico através de películas escurecidas."
  },
  {
    img: "https://img.freepik.com/fotos-gratis/ainda-vida-de-colocar-vinis-decorativos_23-2149683506.jpg",
    title: "Adesivos de Parede Personalizados",
    description: "Solução criativa para decorar ou sinalizar ambientes com frases, logos, imagens ou artes exclusivas."
  },
  {
    img: "https://img.freepik.com/fotos-premium/cartao-de-nome-startup-company-cartao-de-visita-energetic-orange-color-plastico-bussines-ideia-de-conceito_1020495-51871.jpg",
    title: "Placas de Sinalização",
    description: "Usadas em sinalização de segurança, acessibilidade e direção. Leves, duráveis e altamente personalizáveis."
  }
];

function Services() {
  return (
    <>
      <section className="service-carousel-wrapper">
        <h2 className="service-carousel-heading">Nossos Serviços</h2>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          showDots={false}
          containerClass="carousel-container"
        >
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-img-box">
                <img src={service.img} alt={service.title} className="service-img" />
              </div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <Portfolio />
    </>
  );
}

export default Services;

// Serviços puxados do back

/* const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('') // URL da API
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os serviços');
        }
        return response.json();
      })
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando serviços...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <section className="service-carousel-wrapper">
        <h2 className="service-carousel-heading">Nossos Serviços</h2>
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <Link to={`/servico-${index + 1}`} className="service-card-link">
                <div className="service-img-box">
                  <img src={service.img} alt={service.title} className="service-img" />
                </div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </section>

      <Portfolio />
    </>
  );
}

export default Services; */
