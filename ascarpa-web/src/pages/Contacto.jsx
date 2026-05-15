import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const formRef = useRef();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  // Colores oficiales extraídos de los metadatos
  const cianOficial = '#71BBCC'; 
  const azulOscuroOficial = '#456E7B'; 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // 1. Validación de campos nativa de Bootstrap
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);

    // 2. Lógica Honeypot anti-spam
    if (formRef.current.address_field.value) {
      setTimeout(() => {
        setLoading(false);
        setStatus({ type: 'success', msg: '¡Mensaje enviado con éxito!' });
      }, 1000);
      return;
    }

    // 3. Envío utilizando variables de entorno protegidas
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      formRef.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setLoading(false);
        setStatus({ type: 'info', msg: '¡Mensaje enviado! Revisaremos tu solicitud pronto.' });
        formRef.current.reset();
        setValidated(false);
    }, (error) => {
        setLoading(false);
        setStatus({ type: 'danger', msg: 'Error al enviar. Por favor intenta más tarde.' });
        console.error('Error EmailJS:', error.text);
    });
  };

  return (
    <section className="py-5 bg-white min-vh-100">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col lg={8} className="mx-auto">
            <div 
              className="badge rounded-pill px-3 py-2 mb-3 shadow-sm" 
              style={{ backgroundColor: `${cianOficial}1A`, color: cianOficial }}
            >
              Servicio en toda la V Región
            </div>
            <h2 className="display-4 fw-bold" style={{ color: azulOscuroOficial }}>
              Contacto <span style={{ color: cianOficial }}>Ascarpa</span>
            </h2>
            <p className="text-secondary lead">
              Solicita tu presupuesto para arriendo de carpas y maquinaria. Operamos desde <strong>Villa Alemana</strong>.
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          <Col lg={7}>
            {status.msg && <Alert variant={status.type} className="rounded-4 border-0 shadow-sm">{status.msg}</Alert>}
            
            <Card className="border-0 shadow-sm p-4 rounded-4">
              <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
                {/* Honeypot invisible */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="address_field" tabIndex="-1" autoComplete="off" />
                </div>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="nombre">
                      <Form.Label className="fw-bold small text-muted">Nombre</Form.Label>
                      <Form.Control 
                        name="user_name" 
                        required 
                        type="text" 
                        placeholder="Tu nombre" 
                        className="py-2 border-0 bg-light shadow-none" 
                      />
                      <Form.Control.Feedback type="invalid">Por favor, ingresa tu nombre.</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="telefono">
                      <Form.Label className="fw-bold small text-muted">Teléfono</Form.Label>
                      <Form.Control 
                        name="user_phone" 
                        required 
                        type="tel" 
                        pattern="^[0-9+]{9,12}$" 
                        placeholder="+56 9..." 
                        className="py-2 border-0 bg-light shadow-none" 
                      />
                      <Form.Control.Feedback type="invalid">Ingresa un teléfono válido (+569...).</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="fw-bold small text-muted">Correo Electrónico</Form.Label>
                  <Form.Control 
                    name="user_email" 
                    required 
                    type="email" 
                    placeholder="ejemplo@correo.com" 
                    className="py-2 border-0 bg-light shadow-none" 
                  />
                  <Form.Control.Feedback type="invalid">Ingresa un correo electrónico válido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="mensaje">
                  <Form.Label className="fw-bold small text-muted">¿En qué podemos ayudarte?</Form.Label>
                  <Form.Control 
                    name="message" 
                    required 
                    as="textarea" 
                    rows={4} 
                    minLength={10}
                    placeholder="Cuéntanos sobre tu proyecto..." 
                    className="border-0 bg-light shadow-none" 
                  />
                  <Form.Control.Feedback type="invalid">Escribe al menos 10 caracteres.</Form.Control.Feedback>
                </Form.Group>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={loading}
                  className="w-100 rounded-pill fw-bold border-0 py-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: cianOficial, color: '#fff' }}
                >
                  {loading ? (
                    <><Spinner animation="border" size="sm" /> ENVIANDO...</>
                  ) : (
                    <>ENVIAR MENSAJE <Send size={18} /></>
                  )}
                </Button>
              </Form>
            </Card>
          </Col>

          <Col lg={5}>
            <div className="ps-lg-4">
              <h4 className="fw-bold mb-4" style={{ color: azulOscuroOficial }}>Información de contacto</h4>
              
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded-circle" style={{ backgroundColor: `${cianOficial}1A`, color: cianOficial }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Ubicación Central</h6>
                  <p className="text-secondary mb-0">Villa Alemana, Quinta Región, Chile</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded-circle" style={{ backgroundColor: `${cianOficial}1A`, color: cianOficial }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">WhatsApp</h6>
                  <p className="text-secondary mb-0">+56 9 8205 6170</p>
                  <p className="text-secondary mb-0">+56 9 8265 5339</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded-circle" style={{ backgroundColor: `${cianOficial}1A`, color: cianOficial }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Email de Ventas</h6>
                  <p className="text-secondary mb-0">ascarpa.ventas@gmail.com</p>
                </div>
              </div>

              <Card className="border-0 rounded-4 bg-light p-4 mt-4 shadow-none border-start border-4" style={{ borderColor: cianOficial }}>
                <h6 className="fw-bold mb-2" style={{ color: azulOscuroOficial }}>Horario de Atención</h6>
                <p className="small text-secondary mb-0">Lunes a Viernes: 09:00 - 18:30</p>
                <p className="small text-secondary mb-0">Sábado: 10:00 - 14:00</p>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacto;