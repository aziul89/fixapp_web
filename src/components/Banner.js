import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Banner.css";
import { useAuth } from "../context/AuthContext"; 

function Banner() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); 

  const images = [
    "/images/infos.png",
    "/images/infos.png",
    "/images/info1.png",
    "/images/info1.png",
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
              {!isAuthenticated && ( 
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
