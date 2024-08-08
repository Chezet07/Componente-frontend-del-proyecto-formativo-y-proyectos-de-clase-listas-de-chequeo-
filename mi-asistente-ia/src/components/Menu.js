import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Menú Principal</h1>
      <nav>
        <ul>
          <li><Link to="/files">Archivos</Link></li>
          <li><Link to="/ai">Inteligencia Artificial</Link></li>
          <li><Link to="/links">Vínculos</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
