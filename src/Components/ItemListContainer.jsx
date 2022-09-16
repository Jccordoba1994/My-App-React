import React, {useState, useEffect} from 'react';
import ItemList from './Fragmentos/ItemList';
import productos from '../Components/Fragmentos/Item';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    // estado que va a guardar el listado de nuestros productos
    const [productosState, setProductosState] = useState ([]);

    const {categoria} = useParams()

    const consultarPromesa = new Promise ((res,rej) => {
        if (categoria) {
            setTimeout(() => res (productos.filter(item => item.category === categoria)), 2000 )
        } else {
            setTimeout(() => res (productos), 2000 )
        }
    })

    useEffect(() => {
        consultarPromesa
        .then((productos) => setProductosState(productos))
        .catch(error => console.error(error))

        return () => {
            setProductosState([])
        }
    }, [categoria])
    
    return (
        <>
            {productosState.length ? (<ItemList productosState={productosState} />) : (<h1>Cargando...</h1>)}
        </>
    )
}

export default ItemListContainer;
