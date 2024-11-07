import React from 'react';
import Slidebar from './components/Slidebar/Slidebar';
import Barup from './components/Barup/Barup';
import Principal from './Pages/Principal/Principal';
import "./App.css";

function App() {
  return (
    <div className='container-app'>
      <Barup/>
      <div className='container-page'>
        <Slidebar/>
        <Principal/>
      </div>
      
    </div>
      

  );
}



export default App;