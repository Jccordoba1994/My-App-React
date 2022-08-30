import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({initial, stock, onAdd}) => {
    const [cont, setCont] = useState(initial);
    function Contador(operacion) {
        if (operacion == '+') {
            setCont(cont + 1)
        } else {
            setCont(cont - 1)
        }
    }

    return (
        <>
            <div className='contenedor'>
                <img className='botella' src="https://cdn.pixabay.com/photo/2012/04/15/21/02/champagne-35313_1280.png" alt="Champagne" />
                <p className='texto'>
                    CHAMPAGNE 
                    <br />
                    {cont}
                </p>
                <button className='btn btn-primary' disabled={cont <= 1} onClick={() => Contador('-')}>
                    -
                </button>
                <button className='btn btn-secondary' disabled={cont >= stock} onClick={() => Contador('+')}>
                    +
                </button>
            </div>
            <div className='contenedor'>
                <img className='botella' src="https://cdn.pixabay.com/photo/2015/10/28/15/10/wine-1010656_1280.png" alt="Vino" />
                <p className='texto'>
                    VINO 
                    <br />
                    SIN STOCK
                </p>
                <button className='btn btn-primary'>
                    -
                </button>
                <button className='btn btn-secondary'>
                    +
                </button>
            </div>
        </>
    );
}

export default ItemCount;
