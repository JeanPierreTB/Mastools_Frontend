import React from 'react';
import Slidebar from './components/Slidebar/Slidebar';
import Barup from './components/Barup/Barup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Principal from './Pages/Principal/Principal';
import Perfil from './Pages/Perfil/Perfil';
import Inventario from './Pages/Inventario/Inventario';
import "./App.css";
import EProducto from './Pages/EProducto/EProducto';
import AProducto from './Pages/AProducto/AProducto';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
import CContrasena from './Pages/CContrasena/CContrasena';
import CProducto from './Pages/CProducto/CProducto';

function App() {
  const Layout = ({ children }) => (
    <div className="container-app">
      <Barup />
      <div className="container-page">
        <Slidebar />
        {children}
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/cambio' element={<CContrasena/>}/>

        <Route path="/principal"
          element={
            <Layout>
              <Principal />
            </Layout>
          }
        />
        <Route path="/perfil"
          element={
            <Layout>
              <Perfil />
            </Layout>
          }
        />
        <Route path="/inventario"
          element={
            <Layout>
              <Inventario />
            </Layout>
          }
        />
        <Route path="/eproducto"
          element={
            <Layout>
              <EProducto />
            </Layout>
          }
        />
        <Route path="/agregar-producto"
          element={
            <Layout>
              <AProducto />
            </Layout>
          }
        />

        <Route path='/cproducto'
          element={
            <Layout>
              <CProducto/>
            </Layout>
          }
         /> 

      </Routes>
    </Router>
  );
}


export default App;