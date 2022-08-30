import React, {useState} from 'react';


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
        <div>
            <p>
                Contador: {cont}
            </p>
            <button className='btn btn-primary' disabled={cont >= stock} onClick={() => Contador('+')}>
                +
            </button>
            <button className='btn btn-secondary' disabled={cont <= 1} onClick={() => Contador('-')}>
                -
            </button>
        </div>
    );
}

export default ItemCount;
