import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Banner.css";
import { useAuth } from "../context/AuthContext"; // ✅ IMPORTADO

function Banner() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // ✅ PEGA STATUS DE LOGIN

  const images = [
    "/images/img1.webp",
    "https://img.freepik.com/fotos-gratis/vista-frontal-de-uma-jovem-segurando-uma-placa-vermelha-de-venda-na-parede-marrom_140725-152441.jpg?ga=GA1.1.1617786885.1714433104&semt=ais_hybrid&w=740",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
  ];

  return (
    <section className="banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="banner-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-slide"
              style={{
                backgroundImage: `url(${src})`,
              }}
            >
              {!isAuthenticated && ( // ✅ CONDICIONAL
                <div className="banner-content">
                  <h1>Aplicação de Películas</h1>
                  <p>Plataforma de contratação de serviços da IdeaFix.</p>
                  <button className="cta-button" onClick={() => navigate("/register")}>
                    Contrate agora
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;
