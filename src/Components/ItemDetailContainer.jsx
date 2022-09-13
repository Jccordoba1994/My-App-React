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
    return isLoading ? <button>Menu del día</button> : <ItemDetail />
}

export default ItemDetailContainer;
