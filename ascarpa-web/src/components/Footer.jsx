import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, MapPin } from 'lucide-react';
// Importamos el logo oficial (asegúrate de que la ruta sea correcta)
import logoOficial from '../../public/logo-ascarpa.png'; 

const Footer = () => {
  // Colores extraídos del archivo .ai
  const cianOficial = '#71BBCC'; // R=113 G=187 B=204
  const azulOscuroOficial = '#456E7B'; // R=69 G=110 B=123

  return (
    <footer className="py-5 border-top" style={{ backgroundColor: '#0f172a', color: '#f8fafc' }}>
      <Container>
        <Row className="g-4">
          {/* Columna 1: Branding Oficial y Ubicación */}
          <Col lg={4} md={6}>
            <div className="mb-3">
              <img 
                src={logoOficial} 
                alt="Logo Ascarpa" 
                height="60" 
                className="mb-2"
              />
            </div>
            <p className="text-secondary small mb-4">
              Soluciones integrales en arriendo de carpas y maquinaria. 
              Servicio profesional basado en Villa Alemana para toda la Quinta Región.
            </p>
            <div className="d-flex align-items-center gap-2 small fw-bold" style={{ color: cianOficial }}>
              <MapPin size={16} />
              <span>Villa Alemana, V Región, Chile</span>
            </div>
          </Col>

          {/* Columna 2: Enlaces Rápidos */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold text-white mb-4 uppercase tracking-widest small">Navegación</h6>
            <ul className="list-unstyled d-grid gap-2">
              <li><Link to="/" className="text-secondary text-decoration-none small transition link-hover">Inicio</Link></li>
              <li><Link to="/galeria" className="text-secondary text-decoration-none small transition link-hover">Galería</Link></li>
              <li><Link to="/contacto" className="text-secondary text-decoration-none small transition link-hover">Contacto</Link></li>
            </ul>
          </Col>

          {/* Columna 3: Servicios Principales */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold text-white mb-4 uppercase tracking-widest small">Servicios</h6>
            <ul className="list-unstyled d-grid gap-2 text-secondary small">
              <li>Carpas Estructurales</li>
              <li>Maquinaria para Eventos</li>
              <li>Iluminación de Plazas</li>
              <li>Montaje Logístico</li>
            </ul>
          </Col>

          {/* Columna 4: Redes Sociales y Contacto */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold text-white mb-4 uppercase tracking-widest small">Redes Sociales</h6>
            <div className="d-flex gap-3">
              {/* Círculos con el azul oscuro oficial de fondo */}
              {[Instagram, Facebook, MessageCircle].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="p-2 rounded-circle transition hover-scale d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: `${azulOscuroOficial}33`, color: cianOficial }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="mb-0 small text-secondary">¿Necesitas una cotización?</p>
              <a 
                href="tel:+56982056170" 
                className="fw-bold text-decoration-none"
                style={{ color: cianOficial }}
              >
                +56 9 8205 6170 <br />
                +56 9 8265 5339
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-5 border-secondary border-opacity-20" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="small text-secondary mb-0">
              © {new Date().getFullYear()} Ascarpa Servicios. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <span className="small text-secondary">Diseñado en la Ciudad de los Molinos 🇨🇱</span>
          </Col>
        </Row>
      </Container>

      {/* CSS interno para el efecto hover */}
      <style>{`
        .link-hover:hover { color: ${cianOficial} !important; }
        .hover-scale:hover { transform: scale(1.1); background-color: ${azulOscuroOficial} !important; }
      `}</style>
    </footer>
  );
};

export default Footer;