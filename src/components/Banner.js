import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Banner.css";
// colocar informações da empresa


function Banner() {
  const navigate = useNavigate();

  const images = [
    "/images/img1.webp",
    "/images/banner2.jpg",
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
              <div className="banner-content">
                <h1>Aplicação de Películas</h1>
                <p>Plataforma de contratação de serviços da IdeaFix.</p>
                <button className="cta-button" onClick={() => navigate("/register")}>
                  Contrate agora
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;
