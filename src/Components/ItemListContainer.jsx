import React, {useState, useEffect} from 'react';
import ItemList from './Fragmentos/ItemList';
import productos from '../Components/Fragmentos/Item';



function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res (productos)
        } else {
            rej('Acceso denegado')
        }
    })
}

const ItemListContainer = () => {
    const [productosState, setProductosState] = useState ([]);

    console.log(productosState)
    useEffect(() => {
        consultarPromesa(true)
    .then(data => {
        setProductosState(productos)
        })
        .catch(error => {
            console.error(error)
        })

    }, [])
    
    return (
        <>
            <div className='row'>
                {productosState.length > 0 && <ItemList listP={productosState}/>}
            </div>
        </>
    );
}

export default ItemListContainer;
