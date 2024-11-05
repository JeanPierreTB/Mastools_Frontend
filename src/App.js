import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registro from './Registro';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Página Principal</Link> | <Link to="/registro">Ir a Sistema de Reservas de Libros</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

// Nuevo componente para la página principal
function Home() {
  return (
    <div>
      <h1>Página Principal</h1>
      <p>Bienvenido a la página principal.</p>
    </div>
  );
}

export default App;