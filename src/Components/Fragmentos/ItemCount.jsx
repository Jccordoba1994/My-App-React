import React, {useState} from 'react';
import './ItemCount.css';
const ItemCount = ({initial, stock}) => {
    const [cont, setCont] = useState(initial);
    function Contador(operacion) {
        if (operacion == '+') {
            setCont(cont + 1)
        } else {
            setCont(cont - 1)
        }
    }

    return (
        <div className='contenedor'>
            <p className='contador'>
                {cont}
            </p> 
            <button className='btn btn-secondary' disabled={cont <= 1} onClick={() => Contador('-')}>
                -
            </button>
            <button className='btn btn-primary' disabled={cont >= stock} onClick={() => Contador('+')}>
                +
            </button>
        </div>
    );
}

export default ItemCount;