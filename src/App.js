import React from 'react';
import Slidebar from './components/Slidebar/Slidebar';
import Barup from './components/Barup/Barup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Pages/Principal/Principal';
import Perfil from './Pages/Perfil/Perfil';


import "./App.css";

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
          </Routes>
      </div>
      
    </div>
    </Router>
    
      

  );
}



export default App;