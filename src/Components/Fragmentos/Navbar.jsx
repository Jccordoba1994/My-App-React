import React from 'react';
import Form from './Form';
import CartWidget from './CartWidget';

function Navbar() {
  const user = {nombre: 'Francisco', direccion: 'Calle Falsa 123'}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">YourStore</a>
          <div className="collapse navbar-collapse" id="navbarColor01">

            <Form/>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
