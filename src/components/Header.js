import React from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador';

function Header() {
  return (
    <header>
      <nav>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listado">Listado</Link>
            </li>
            <li>Contacto</li>
        </ul>
      </nav>
      <Buscador/>
    </header>
  )
}

export default  Header;