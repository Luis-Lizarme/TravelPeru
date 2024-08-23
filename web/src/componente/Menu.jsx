import React from 'react';
import '/workspaces/TravelPeru/web/src/App.css';

function Menu() {
  return (
<header>
  <div className="logo">
    <img src="/path-to-your-logo.png" alt="Peru Travel" /> 
    <h1 style={{ color: '#A020F0' }}>Todo <span style={{ color: '#FF8000' }}>Turismo</span></h1>
  </div>
  <div className="menu-container">
    <a href="#" className="menu-item">Inicio</a>
    <a href="#" className="menu-item">Salidas diarias</a>
    <a href="#" className="menu-item">Full day</a>
    <a href="#" className="menu-item">Promos</a>
    <a href="#" className="menu-item">Contacto</a>
  </div>
  <div className="search-bar">
    <input type="text" placeholder="Buscar" />
  </div>
</header>

  );
}

export default Menu;