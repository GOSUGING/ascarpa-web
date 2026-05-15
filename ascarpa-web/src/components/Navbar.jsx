import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Toast, ToastContainer, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhoneCall, Clock, MessageCircle, Circle, X } from 'lucide-react';
import logoOficial from '../../public/logo-ascarpa.png'; 

const Navigation = () => {
  const [time, setTime] = useState(new Date());
  const [showToast, setShowToast] = useState(false);

  const cianOficial = '#71BBCC'; 
  const azulOscuroOficial = '#456E7B';

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    const welcomeTimer = setTimeout(() => {
      if (checkStatus()) setShowToast(true);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const checkStatus = () => {
    const day = time.getDay(); 
    const now = time.getHours() * 60 + time.getMinutes();
    if (day >= 1 && day <= 5) return now >= 540 && now <= 1110; // 09:00 - 18:30
    if (day === 6) return now >= 600 && now <= 840; // 10:00 - 14:00
    return false;
  };

  const isOpen = checkStatus();

  return (
    <>
      <Navbar bg="white" expand="lg" className="py-2 border-bottom shadow-sm sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logoOficial} alt="Ascarpa" height="50" />
          </Navbar.Brand>

          <div className="d-none d-lg-flex align-items-center ms-3 gap-2">
            <div className="px-3 py-1 rounded-pill border d-flex align-items-center bg-light shadow-sm" style={{ fontSize: '0.8rem', color: azulOscuroOficial }}>
              <Circle size={8} fill={isOpen ? '#10b981' : '#ef4444'} className={`me-2 ${isOpen ? 'pulse' : ''}`} style={{ color: isOpen ? '#10b981' : '#ef4444' }} />
              <span className="fw-bold text-uppercase" style={{ fontSize: '0.7rem' }}>
                {isOpen ? 'Estamos Atendiendo' : 'Fuera de Horario'}
              </span>
              <div className="vr mx-3" style={{ height: '15px' }}></div>
              <Clock size={14} className="me-2" style={{ color: cianOficial }} />
              <span className="fw-bold font-monospace">{time.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center gap-4">
              <Nav.Link as={Link} to="/" className="fw-bold" style={{ color: azulOscuroOficial }}>Inicio</Nav.Link>
              <Nav.Link as={Link} to="/productos" className="fw-bold" style={{ color: azulOscuroOficial }}>Productos</Nav.Link>
              <Nav.Link as={Link} to="/galeria" className="fw-bold" style={{ color: azulOscuroOficial }}>Galería</Nav.Link>
              
              {/* DROPDOWN DE COTIZAR PARA AMBOS CONTACTOS */}
              <NavDropdown 
                title={
                  <Button className="rounded-pill border-0 px-4 fw-bold shadow-sm d-flex align-items-center" style={{ backgroundColor: cianOficial }}>
                    <PhoneCall size={16} className="me-2" /> COTIZAR
                  </Button>
                } 
                id="nav-dropdown-cotizar"
                className="custom-dropdown p-0"
              >
                <NavDropdown.Item href="https://wa.me/56982056170" target="_blank" className="py-2 fw-bold d-flex align-items-center gap-2">
                  <MessageCircle size={18} style={{ color: '#25D366' }} /> Ventas Línea 1
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://wa.me/56982655339" target="_blank" className="py-2 fw-bold d-flex align-items-center gap-2">
                  <MessageCircle size={18} style={{ color: '#128C7E' }} /> Ventas Línea 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* AVISO EMERGENTE (TOAST) CON DOS BOTONES DE WHATSAPP */}
      <ToastContainer position="bottom-end" className="p-4" style={{ zIndex: 2000, position: 'fixed', bottom: '20px', right: '20px' }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} className="border-0 shadow-lg rounded-4 overflow-hidden" style={{ width: '320px' }}>
          <Toast.Header closeButton={false} className="border-0 text-white p-3" style={{ backgroundColor: azulOscuroOficial }}>
            <MessageCircle size={18} className="me-2" />
            <strong className="me-auto">Atención Inmediata</strong>
            <X size={18} className="cursor-pointer" onClick={() => setShowToast(false)} />
          </Toast.Header>
          <Toast.Body className="bg-white p-4 text-center">
            <p className="mb-3 text-secondary small">¡Hola! Estamos en línea en **Villa Alemana**. Elige un contacto:</p>
            <Button href="https://wa.me/56982056170" target="_blank" className="w-100 rounded-pill border-0 fw-bold d-flex align-items-center justify-content-center gap-2 mb-2" style={{ backgroundColor: '#25D366' }}>
              <MessageCircle size={18} /> CONTACTO VENTAS 1
            </Button>
            <Button href="https://wa.me/56982655339" target="_blank" className="w-100 rounded-pill border-0 fw-bold d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#128C7E' }}>
              <MessageCircle size={18} /> CONTACTO VENTAS 2
            </Button>
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <style>{`
        .pulse { animation: pulse-animation 2s infinite; }
        @keyframes pulse-animation { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
        .cursor-pointer { cursor: pointer; }
        .toast { animation: slideIn 0.5s ease-out; }
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        
        /* Limpieza de Dropdown */
        .custom-dropdown .dropdown-toggle::after { display: none; }
        .dropdown-menu { border-radius: 12px; border: none; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin-top: 10px; }
      `}</style>
    </>
  );
};

export default Navigation;