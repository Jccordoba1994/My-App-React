import React from 'react';
import Brochetas from '../../Images/Brochetas.jpg'
import './ItemDetail.css';

const ItemDetail = () => {
    return (
        <div className="card border-primary mb-3" style={{maxWidth: '30rem', margin: '20px'}}>
            <img className='imagen' src={Brochetas} alt="Brochetas de verduras" />
            <div className="card-header">Brochetas de Verduras</div>
            <div className="card-body1">
                <h4 className="card-title1">$560</h4>
                <ul className='card-text2'>
                    <li>Pimiento verde</li>
                    <li>Pimiento amarillo</li>
                    <li>Zanahoria</li>
                    <li>Tomate</li>
                    <li>Cebolla morada</li>
                    <li>Papa</li>
                    <li>Calabacin </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemDetail;
