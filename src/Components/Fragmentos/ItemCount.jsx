import React, {useState} from 'react';
import './ItemCount.css';
const ItemCount = ({stock, item}) => {

    const [cantidad, setCantidad] = useState(1);

    const agregarCarrito = (item, cantidad) => {
        const productoCarrito = {id: item.id, cantidad: cantidad}
        console.log(productoCarrito);
    }

    const sumarProducto = () => {
        cantidad < stock && setCantidad (cantidad + 1)
    }

    const restarProducto = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    return (
        <div className='counter-container'>
            <p className='counter'>{cantidad}</p>
            <div className='button-container'>
                <button className='button' onClick={restarProducto}>-</button>
                <button className='button' onClick={sumarProducto}>+</button>
            </div>
            <button className='button button-buy' onClick={() => agregarCarrito (item, cantidad)}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;