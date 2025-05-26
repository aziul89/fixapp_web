import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Portfolio from "./Portfolio";
import "../styles/CarouselServ.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ideiafix-back-end-1test.onrender.com/services") // 🔁 Atualize a URL se necessário
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os serviços");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

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
         {services.map((service) => (
  <Link to={`/services/${service.id}`} key={service.id} className="service-card-link">
    <div className="service-card">
      <div className="service-img-box">
        <img
          src={service.imgUrl || "https://via.placeholder.com/300x200"}
          alt={service.nome}
          className="service-img"
        />
      </div>
      <div className="service-info">
        <h3 className="service-title">{service.nome}</h3>
        <p className="service-description">{service.descricao}</p>
      </div>
    </div>
  </Link>
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
