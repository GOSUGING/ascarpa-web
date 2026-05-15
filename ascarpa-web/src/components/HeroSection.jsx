import { Container, Row, Col, Button } from 'react-bootstrap';
// Importamos Link para la navegación interna
import { Link } from 'react-router-dom';

const Hero = () => {
  // Colores extraídos del logo oficial de Ascarpa
  const cianOficial = '#71BBCC'; // 
  const azulOscuroOficial = '#456E7B'; // 

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center" style={{ minHeight: '70vh' }}>
          <Col lg={6}>
            {/* Badge con transparencia del cian oficial */}
            <div 
              className="badge rounded-pill px-3 py-2 mb-4" 
              style={{ backgroundColor: `${cianOficial}1A`, color: cianOficial }}
            >
              Sistema de Gestión de Eventos
            </div>

            {/* Título usando el azul oscuro y cian oficial */}
            <h1 className="display-3 fw-bold mb-4" style={{ color: azulOscuroOficial }}>
              Control total de tu evento en <span style={{ color: cianOficial }}>un solo lugar.</span>
            </h1>

            <p className="lead text-secondary mb-5">
              La plataforma integral para arriendo de carpas y maquinaria. Gestiona tus proyectos con tecnología de punta.
            </p>

            <div className="d-flex gap-3">
              {/* Botón principal en el cian oficial */}
              <Button 
                as={Link}
                to="/contacto"
                size="lg" 
                className="rounded-pill px-4 shadow border-0 d-flex align-items-center justify-content-center" 
                style={{ backgroundColor: cianOficial, color: '#fff', fontWeight: 'bold' }}
              >
                Solicitar Cotización →
              </Button>

              {/* Botón Secundario en outline con el cian oficial */}
              <Button 
                as={Link} 
                to="/galeria" 
                variant="outline-info" 
                size="lg" 
                className="rounded-pill px-4"
                style={{ backgroundColor: 'transparent', borderColor: cianOficial, color: cianOficial, fontWeight: 'bold' }}
              >
                Ver Galería
              </Button>
            </div>
          </Col>
          
          <Col lg={6} className="mt-5 mt-lg-0 text-center text-lg-end">
             <img
               src={`${import.meta.env.BASE_URL}carpa1.jpeg`}
               className="img-fluid rounded-4 shadow-lg"
               style={{ maxWidth: '90%' }}
               alt="Ascarpa"
             />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;