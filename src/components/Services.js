import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Portfolio from "./Portfolio"
import "../styles/Carousel.css"; 


const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

// Todos os serviços da empresa (esses são exemplos)
const services = [
  { img: "https://via.placeholder.com/500", title: "Películas Automotivas", description: "Proteção e conforto para seu carro, reduzindo calor e raios UV." },
  { img: "https://via.placeholder.com/500", title: "Películas Residenciais", description: "Mais privacidade e controle térmico para sua casa e ambiente." },
  { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Películas Empresariais", description: "Reduza o consumo de energia e aumente a privacidade." },
  { img: "https://via.placeholder.com/500", title: "Películas Decorativas", description: "Dê um toque especial aos vidros com estilos personalizados." }
];

function Services() {
  return (
    <>
    <section className="carousel-container">
      <h2 className="carousel-title">Nossos Serviços</h2>
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        {services.map((service, index) => (
          <div key={index} className="carousel-card">
            <Link to={`/servico-${index + 1}`} className="card-link">
              <div className="card-image-container">
                <img src={service.img} alt={service.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
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

export default Services;
