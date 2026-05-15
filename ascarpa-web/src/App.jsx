import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx' // No olvides crear este archivo
import HomePage from './pages/HomePage.jsx'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto.jsx'
import Productos from './pages/Productos.jsx'
import './App.css'

function App() {
  return (
    <>
      {/* El Navbar se mantiene fijo arriba en todas las rutas */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </main>

      {/* El Footer se mantiene fijo abajo en todas las rutas */}
      <Footer />
    </>
  )
}

export default App