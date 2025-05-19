// PortfolioCarousel.js
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarouselPort.css";
import port1 from "../assets/portfolio/acrilico.png";
import port2 from "../assets/portfolio/neon.webp";
import port3 from "../assets/portfolio/cozinha.webp";
import port4 from "../assets/portfolio/mdf.jpg";
import port5 from "../assets/portfolio/janela.webp";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const portfolio1 = [
  {
    img: "https://img.freepik.com/fotos-premium/trabalhador-de-servico-automovel-aplicando-nano-revestimento-em-um-detalhe-do-carro_179755-10517.jpg",
  },
  { img: port1 },
  {
    img: "https://img.freepik.com/fotos-gratis/balcao-de-cozinha-moderno-de-renderizacao-3d-com-design-branco-e-biege_105762-2228.jpg",
  },
  {
    img: "https://img.freepik.com/fotos-premium/tingimento-do-carro-trabalhador-aplicando-folha-de-tingimento-na-janela-do-carro_473712-4471.jpg",
  },
];

const portfolio2 = [
  { img: port2 },
  { img: port3 },
  { img: port4 },
  { img: port5 },
];

function PortfolioCarousel() {
  return (
    <div>
      <section className="carousel-wrapper">
        <h2 className="showcase-title">Nosso Portfólio</h2>
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          {portfolio1.map((item, index) => (
            <div key={`first-${index}`} className="carousel-card">
              <img src={item.img} alt={`portfolio-${index}`} className="carousel-img" />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="carousel-wrapper">
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          {portfolio2.map((item, index) => (
            <div key={`second-${index}`} className="carousel-card">
              <img src={item.img} alt={`portfolio2-${index}`} className="carousel-img" />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default PortfolioCarousel;
