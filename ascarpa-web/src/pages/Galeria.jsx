import React from 'react';
// Importamos Swiper y sus módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Galeria = () => {
  const cianOficial = '#71BBCC'; //
  const azulOscuroOficial = '#456E7B'; //

  const fotos = [
    { id: 1, url: '.././carpa2.jpeg', desc: 'Toldo y Sillas Evento SERVIU' },
    { id: 2, url: '.././carpa3.jpeg', desc: 'Carpa Servicio de Emergencia' },
    { id: 3, url: '.././carpa4.jpeg', desc: 'Carpa con Panorámicos' },
    { id: 4, url: '.././carpa5.jpeg', desc: 'Estructura con Cielo Falso' },
    { id: 5, url: '.././carpa6.jpeg', desc: 'Gala Festival de Viña' },
    { id: 6, url: '.././carpa7.jpeg', desc: 'Carpa Rockódromo' },
  ];

  return (
    <section className="py-5 bg-white min-vh-100 d-flex flex-column justify-content-center overflow-hidden">
      {/* Cabecera */}
      <div className="text-center mb-5 px-3">
        <div 
          className="d-inline-flex align-items-center gap-2 px-4 py-1 rounded-pill mb-3 shadow-sm"
          style={{ backgroundColor: `${cianOficial}1A`, color: cianOficial, border: `1px solid ${cianOficial}33` }}
        >
          <span className="small fw-bold text-uppercase tracking-widest">Galería</span>
        </div>
        
        <h2 className="display-3 fw-bold mb-3" style={{ color: azulOscuroOficial, letterSpacing: '-1px' }}>
          Nuestros <span style={{ color: cianOficial }}>Grandes Montajes</span>
        </h2>
        
        <p className="text-secondary max-w-2xl mx-auto lead">
          Explora la infraestructura de Ascarpa en la Quinta Región a través de nuestra experiencia visual.
        </p>
      </div>

      {/* Carrusel Full Width */}
      <div className="swiper-container-full w-100">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="pb-5 pt-2"
        >
          {fotos.map((foto) => (
            <SwiperSlide 
              key={foto.id} 
              className="modern-slide"
              style={{ width: 'min(90%, 600px)', height: '450px' }}
            >
              <div className="slide-content w-100 h-100 position-relative rounded-5 overflow-hidden shadow-2xl border border-light">
                <img 
                  src={foto.url} 
                  alt={foto.desc} 
                  className="w-100 h-100 object-cover"
                />
                <div 
                  className="absolute bottom-0 start-0 w-100 p-4 text-white"
                  style={{ 
                    background: `linear-gradient(transparent, ${azulOscuroOficial})`,
                    backdropFilter: 'blur(4px)' 
                  }}
                >
                  <h4 className="mb-0 fw-bold">{foto.desc}</h4>
                  <small className="opacity-75 text-uppercase tracking-wider">Ascarpa Proyectos</small>
                </div>
              </div>
              {/* Efecto de reflejo */}
              <div className="slide-reflection" style={{ backgroundImage: `url(${foto.url})` }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Estilos Modernos */}
      <style>{`
        .swiper-button-next, .swiper-button-prev { 
          color: ${cianOficial} !important; 
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 20px; font-weight: bold; }
        
        .swiper-pagination-bullet-active { background: ${cianOficial} !important; width: 30px; border-radius: 5px; }
        
        .modern-slide {
          transition: transform 0.5s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .slide-content {
          transition: all 0.5s ease;
          transform: scale(0.85);
          filter: brightness(0.5) saturate(0.5);
        }

        .swiper-slide-active .slide-content {
          transform: scale(1);
          filter: brightness(1) saturate(1);
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
        }

        /* Efecto Reflejo moderno */
        .slide-reflection {
          width: 100%;
          height: 100px;
          margin-top: 10px;
          background-size: cover;
          background-position: bottom;
          transform: scaleY(-1);
          mask-image: linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.2));
          opacity: 0.3;
          border-radius: 0 0 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Galeria;