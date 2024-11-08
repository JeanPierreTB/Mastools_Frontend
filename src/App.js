import React from 'react';
import Slidebar from './components/Slidebar/Slidebar';
import Barup from './components/Barup/Barup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Pages/Principal/Principal';
import Perfil from './Pages/Perfil/Perfil';
import Inventario from './Pages/Inventario/Inventario';


import "./App.css";
import EProducto from './Pages/EProducto/EProducto';
import AProducto from './Pages/AProducto/AProducto';

function App() {
  return (
    <Router>
        <div className='container-app'>
      <Barup/>
      <div className='container-page'>
        <Slidebar/>
        
          <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/inventario' element={<Inventario/>}/>
            <Route path='/eproducto' element={<EProducto/>}/>
            <Route path='/agregar-producto' element={<AProducto/>}/>
          </Routes>
      </div>
      
    </div>
    </Router>
    
      

  );
}



export default App;