import React from 'react';
import Form from './Form';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
        <div className="container-fluid">Your Drink
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/categoria/bebida'>Bebidas</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/categoria/comida'>Comidas</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/contacto'>Contacto</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/franquicias'>Franquicias</Link>
              </li>
              <Form />
              <CartWidget/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
