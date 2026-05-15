import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CheckCircle } from 'lucide-react';

const Productos = () => {
  const azulOscuro = '#456E7B';
  const cian = '#71BBCC';

  const base = import.meta.env.BASE_URL;
  const listaProductos = [
    { id: 1, nombre: "Carpas Plisadas", desc: "Estructuras elegantes para eventos de alto nivel.", img: `${base}carpa-plisada.jpeg` },
    { id: 2, nombre: "Toldos", desc: "Protección versátil para eventos al aire libre.", img: `${base}carpa2.jpeg` },
    { id: 3, nombre: "Sillas Plegables", desc: "Comodidad y practicidad para tus invitados.", img: `${base}silla-plegable.png` },
    { id: 4, nombre: "Iluminación", desc: "Ambientación perfecta con focos LED y guirnaldas.", img: `${base}iluminacion.jpg` },
    { id: 5, nombre: "Estufas de Exterior", desc: "Calidez para eventos nocturnos o de invierno.", img: `${base}estufa.jpg` },
    { id: 6, nombre: "Cubrepisos y Alfombras", desc: "Acabado profesional sobre pasto o pavimento.", img: `${base}cubrepisos.jpg` },
    { id: 7, nombre: "Pasto Sintético", desc: "Transforma cualquier superficie en un jardín.", img: `${base}pasto-sintetico.jpg` },
    { id: 8, nombre: "Ventiladores Industriales", desc: "Frescura garantizada en días calurosos.", img: `${base}ventilador.webp` }
  ];

  return (
    <section className="py-5 bg-light" id="productos">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: azulOscuro }}>Nuestros Productos</h2>
          <p className="text-secondary">Equipamiento integral para eventos en Villa Alemana y alrededores.</p>
        </div>

        <Row className="g-4">
          {listaProductos.map((prod) => (
            <Col key={prod.id} xs={12} md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img variant="top" src={prod.img} alt={prod.nombre} className="h-100 w-100 object-fit-cover" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold h5" style={{ color: azulOscuro }}>
                    {prod.nombre}
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1">
                    {prod.desc}
                  </Card.Text>
                  <ul className="list-unstyled mb-3 small">
                    <li className="d-flex align-items-center gap-2">
                      <CheckCircle size={14} style={{ color: cian }} /> Calidad Garantizada
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Productos;