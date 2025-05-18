import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Carousel.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const portfolio = [
  { img: "https://img.freepik.com/fotos-premium/trabalhador-de-servico-automovel-aplicando-nano-revestimento-em-um-detalhe-do-carro_179755-10517.jpg?ga=GA1.1.1617786885.1714433104&semt=ais_hybrid&w=740", title: "Sinalização de Veículos", description: "Transforme seu veículo em uma poderosa ferramenta de divulgação. Aplicamos adesivos personalizados com alta durabilidade e acabamento profissional, garantindo visibilidade da sua marca onde quer que vá." },
  { img: "https://img.freepik.com/fotos-premium/cartao-de-nome-startup-company-cartao-de-visita-energetic-orange-color-plastico-bussines-ideia-de-conceito_1020495-51871.jpg?ga=GA1.1.1617786885.1714433104&semt=ais_hybrid&w=740", title: "Placas em Acrílico", description: "Produzimos placas elegantes e resistentes em acrílico, ideais para empresas, consultórios, sinalizações internas e externas. Com acabamento refinado, nossas placas conferem sofisticação e profissionalismo ao seu espaço." },
  { img: "https://img.freepik.com/fotos-gratis/balcao-de-cozinha-moderno-de-renderizacao-3d-com-design-branco-e-biege_105762-2228.jpg?ga=GA1.1.1617786885.1714433104&semt=ais_hybrid&w=740", title: "Envelopamento de Móveis", description: "Renove seus móveis sem precisar comprar novos. O envelopamento é uma solução prática e econômica para dar um novo visual a mesas, armários, balcões e muito mais — com opções de texturas, cores e efeitos modernos." },
  { img: "https://img.freepik.com/fotos-premium/tingimento-do-carro-trabalhador-aplicando-folha-de-tingimento-na-janela-do-carro_473712-4471.jpg?ga=GA1.1.1617786885.1714433104&semt=ais_hybrid&w=740", title: "Aplicação de Película Fumê", description: "Oferecemos instalação de películas fumês para residências, comércios e veículos. Elas reduzem o calor, garantem mais privacidade e ainda valorizam o ambiente com um toque de sofisticação e mais elegância." }
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
