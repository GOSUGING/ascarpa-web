import React from 'react';
import HeroSection from '../components/HeroSection';
import Servicios from '../components/Servicios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CheckCircle, Award, Users, MessageSquare, MapPin, Tent } from 'lucide-react';
import { Link } from 'react-router-dom';
// Nota: Para los contadores puedes instalar 'react-countup' y 'react-intersection-observer'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const cianOficial = '#71BBCC'; // [cite: 102]
  const azulOscuroOficial = '#456E7B'; // [cite: 104]
  
  const { ref, inView } = useInView({ triggerOnce: true });

  const pasos = [
    { icono: MessageSquare, texto: "Cotización Online", desc: "Respuesta rápida a tu solicitud." },
    { icono: MapPin, texto: "Visita Técnica", desc: "Evaluamos el terreno en la V Región." },
    { icono: Tent, texto: "Montaje Pro", desc: "Instalación con máxima seguridad." }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <HeroSection />

      {/* 2. CONTADORES ANIMADOS (Stats) */}
      <section ref={ref} className="py-5" style={{ backgroundColor: azulOscuroOficial }}>
        <Container>
          <Row className="text-center text-white g-4">
            <Col md={4}>
              <h2 className="display-4 fw-bold" style={{ color: cianOficial }}>
                {inView && <CountUp end={500} duration={2.5} />} +
              </h2>
              <p className="text-uppercase small tracking-widest opacity-75">Eventos Realizados</p>
            </Col>
            <Col md={4}>
              <h2 className="display-4 fw-bold" style={{ color: cianOficial }}>
                {inView && <CountUp end={14} duration={3} />}
              </h2>
              <p className="text-uppercase small tracking-widest opacity-75">Años de Trayectoria</p>
            </Col>
            <Col md={4}>
              <h2 className="display-4 fw-bold" style={{ color: cianOficial }}>
                {inView && <CountUp end={100} duration={2} />}%
              </h2>
              <p className="text-uppercase small tracking-widest opacity-75">Seguridad Garantizada</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Servicios />

      {/* 3. SECCIÓN DE PROCESO (Interacción visual) */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold" style={{ color: azulOscuroOficial }}>Nuestro <span style={{ color: cianOficial }}>Proceso</span></h2>
              <p className="text-secondary">Cómo trabajamos para asegurar el éxito de tu proyecto.</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {pasos.map((paso, idx) => (
              <Col key={idx} md={4}>
                <div className="process-card p-4 text-center bg-white rounded-4 shadow-sm h-100">
                  <div className="step-number mb-3 mx-auto shadow-sm" style={{ backgroundColor: cianOficial }}>{idx + 1}</div>
                  <paso.icono size={40} className="mb-3" style={{ color: azulOscuroOficial }} />
                  <h5 className="fw-bold">{paso.texto}</h5>
                  <p className="small text-muted mb-0">{paso.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 4. SECCIÓN DE VALORES */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold" style={{ color: azulOscuroOficial }}>
                ¿Por qué confiar en <span style={{ color: cianOficial }}>Ascarpa</span>?
              </h2>
              <p className="text-secondary">Líderes en infraestructura para eventos en Villa Alemana y alrededores.</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4} className="hover-lift">
              <div className="p-4 text-center border rounded-4 h-100 transition shadow-sm">
                <Award size={40} className="mb-3" style={{ color: cianOficial }} />
                <h5 className="fw-bold" style={{ color: azulOscuroOficial }}>Calidad Certificada</h5>
                <p className="small text-muted mb-0">Estructuras que cumplen con todas las normas de seguridad vigentes.</p>
              </div>
            </Col>
            <Col md={4} className="hover-lift">
              <div className="p-4 text-center border rounded-4 h-100 transition shadow-sm">
                <CheckCircle size={40} className="mb-3" style={{ color: cianOficial }} />
                <h5 className="fw-bold" style={{ color: azulOscuroOficial }}>Montaje Seguro</h5>
                <p className="small text-muted mb-0">Equipo técnico especializado con años de experiencia en terreno.</p>
              </div>
            </Col>
            <Col md={4} className="hover-lift">
              <div className="p-4 text-center border rounded-4 h-100 transition shadow-sm">
                <Users size={40} className="mb-3" style={{ color: cianOficial }} />
                <h5 className="fw-bold" style={{ color: azulOscuroOficial }}>Atención Local</h5>
                <p className="small text-muted mb-0">Servicio rápido y personalizado en toda la V Región.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. CALL TO ACTION FINAL */}
      <section className="py-5 border-top" style={{ backgroundColor: `${cianOficial}1A` }}>
        <Container className="text-center py-4">
          <h2 className="fw-bold mb-4" style={{ color: azulOscuroOficial }}>¿Tienes un evento en mente?</h2>
          <p className="lead mb-4 text-secondary">Cotiza con nosotros y asegura la mejor infraestructura para tu proyecto.</p>
          
          <Button 
            as={Link}
            to="/contacto"
            size="lg" 
            className="rounded-pill px-5 fw-bold text-white shadow border-0 cta-button"
            style={{ backgroundColor: cianOficial }}
          >
            HABLAR CON UN ASESOR
          </Button>
        </Container>
      </section>

      <style>{`
        .transition { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-10px); }
        .step-number {
          width: 30px; height: 30px; border-radius: 50%;
          color: white; display: flex; align-items: center; justify-content: center;
          font-weight: bold; font-size: 0.9rem;
        }
        .cta-button:hover {
          filter: brightness(1.1);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        .process-card { border: 1px solid rgba(0,0,0,0.05); }
      `}</style>
    </div>
  );
};

export default Home;