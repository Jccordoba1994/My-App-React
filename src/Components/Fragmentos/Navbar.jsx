import React from 'react';
import Form from './Form';
import CartWidget from './CartWidget';
import Boton from './Boton';

function Navbar() {
  const user = {nombre: 'Francisco', direccion: 'Calle Falsa 123'}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">YourDrink</a>
          <div className="collapse navbar-collapse" id="navbarColor01">

            <Form boton={<Boton/>}/>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
