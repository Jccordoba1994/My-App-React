import React from 'react';
import {Link} from 'react-router-dom'

import './Items.css'

const Items = ({item}) => {
    const {title, imageurl, price, stock, id} = item
    
    return (
        <div className="card border-primary mb-3" style={{maxWidth: '15rem', margin: '10px'}}>
            <div className="card-header">{title}</div>
            <div className="card-body">
                <img className="imagenes" src={imageurl} alt={`Imagen de ${title}`} />
                <p className="card-text"> ${price}</p>
                <Link to={`/detalles/${id}`}>
                    <button className='boton'>Detalles del producto</button>
                </Link >
                <p className="card-text1"> Stock: {stock}</p>
            </div>
        </div>
    );
}

export default Items;


