import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Carousel.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

// ADD portfólio da empresa (esses são exemplos)
const portfolio = [
  { img: "https://via.placeholder.com/300", title: "Carro Protegido", description: "Instalação de película premium para maior conforto térmico." },
  { img: "https://via.placeholder.com/300", title: "Vidros Residenciais", description: "Aplicação de película refletiva para privacidade." },
  { img: "https://via.placeholder.com/300", title: "Fachada Empresarial", description: "Película fumê para reduzir o calor e melhorar a estética." },
  { img: "https://images.unsplash.com/photo-1551961760-c635a013c046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyZWRlJTIwZGVzZW5ob3xlbnwwfHwwfHx8MA%3D%3D", title: "Decoração com Película", description: "Personalização de vidros com estilo e sofisticação." }
];

function PortfolioCarousel() {
  return (
    <section className="portfolio-container">
      <h2 className="carousel-title">Nosso Portfólio</h2>
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        {portfolio.map((item, index) => (
          <div key={index} className="carousel-card">
            <div className="card-image-container">
              <img src={item.img} alt={item.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default PortfolioCarousel;
