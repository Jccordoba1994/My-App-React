import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => {
        console.log(cantidad);
    }

    return (
        <article>
            <h1>{item.title}</h1>
            <div className='card-detail'>
                <div className='card-detail-left'>
                    <img src={item.imageurl} alt={item.title} className='img'/>
                </div>
                <div className='card-detail-right'>
                    <p>{item.description}</p>
                    <p className='price'>${item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                    <button>Añadir al carrito</button>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail;
