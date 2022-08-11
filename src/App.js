import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([]);
     
var gg;

   const obtenerAutoconsumoByEntidad = () => {
     axios.get("https://jsonplaceholder.typicode.com/users").then(response => setUser(response.data));
    
}
   useEffect(() => {
    obtenerAutoconsumoByEntidad();
}, [gg]);
   console.log("asd",user);
   var nombre = user.length === 0 ? 0 : user[2].name;
   var nombre2 = user.length === 0 ? 0 : user[3].name;
   var telefono = user.phone;
   var  url = user.length === 0 ? 0 : user[3].website;
 var telefono2 = user.length === 0 ? 0 : user[2].phone;

  return (
    <div className="App mid-fwe">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> App Diego</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.{}
        </p>
        <h3> nombre: {nombre}</h3>
        <h3> nombre2: {nombre2}</h3>
        <h3> telefono: {telefono}</h3>
<h3> telefono2: {telefono2}</h3>
<h3> telefono2: {telefono2}</h3>
        <a href={url} target="_blank"> link a sitio</a>
        
      </header>
      
      <button className='Boton'></button>

    </div>
  );
}

export default App;
