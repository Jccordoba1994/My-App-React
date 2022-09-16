import React, {useState, useEffect} from 'react';
import productos from './Fragmentos/Item';
import ItemDetail from './Fragmentos/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const {id} = useParams()
    // estado que va a guardar el listado de nuestros productos
    const [item, setItem] = useState ();

    // la promesa, nos devuelve los productos
    const getItem = new Promise ((res, rej) => {
        setTimeout (() => res(productos.find((producto) => producto.id === id)), 2000)
    });

    // encargado de cumplir la promesa
    useEffect(() => {
        getItem.then((res) => setItem(res))
    // para terminar setiendola en el estado

    }, [])

    return (
        <>
            {
                item ? (<ItemDetail item={item}/>) : (<h1>Cargando...</h1>)
            }   
        </>
    )
}

export default ItemDetailContainer;
