import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Truck, Lightbulb, TentTree } from 'lucide-react';

const Servicios = () => {
  // Colores extraídos del logo oficial
  const cianOficial = '#71BBCC'; //
  const azulOscuroOficial = '#456E7B'; //

  const listaServicios = [
    {
      titulo: "Carpas Estructurales",
      descripcion: "Carpas de alta resistencia para ferias, eventos corporativos y bodas en la V Región.",
      Icono: TentTree
    },
    {
      titulo: "Maquinaria Pesada",
      descripcion: "Arriendo de equipos especializados para montajes industriales y logística profesional.",
      Icono: Truck
    },
    {
      titulo: "Iluminación Pro",
      descripcion: "Sistemas de iluminación estructural para eventos nocturnos y plazas públicas.",
      Icono: Lightbulb
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          {/* Título usando el azul oscuro oficial */}
          <h2 className="fw-bold" style={{ color: azulOscuroOficial }}>
            Nuestros <span style={{ color: cianOficial }}>Servicios</span>
          </h2>
          {/* Línea decorativa con el cian oficial */}
          <div 
            className="mx-auto rounded" 
            style={{ height: '4px', width: '60px', backgroundColor: cianOficial }}
          ></div>
        </div>

        <Row className="g-4">
          {listaServicios.map((servicio, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-4 rounded-4 hover-shadow transition bg-white">
                <Card.Body>
                  {/* Círculo de icono usando una transparencia del cian oficial */}
                  <div 
                    className="d-inline-flex p-3 rounded-circle mb-4" 
                    style={{ backgroundColor: `${cianOficial}1A`, color: cianOficial }}
                  >
                    <servicio.Icono size={32} />
                  </div>
                  
                  {/* Título de la card con azul oscuro */}
                  <Card.Title className="fw-bold mb-3" style={{ color: azulOscuroOficial }}>
                    {servicio.titulo}
                  </Card.Title>
                  
                  <Card.Text className="text-secondary">
                    {servicio.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      {/* Estilo para el efecto hover suave */}
      <style>{`
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Servicios;