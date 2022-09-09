import React, {useState, useEffect} from 'react';
import ItemDetail from './Fragmentos/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState ([]);
    const [isLoading, setIsLoading] = useState (true);

    useEffect(() => {
        const getItem = new Promise ((res, rej) => {
            setTimeout (() => {
                res(ItemDetail)
            }, 2000)
        });

        getItem
        .then((response => setItem(response)))
        .finally(() => setIsLoading(false));

    }, []);
    return isLoading ? <h2>Cargando...</h2> : <ItemDetail />
}

export default ItemDetailContainer;
