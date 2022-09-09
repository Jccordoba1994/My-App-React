import React from 'react';
import Items from './Items';

const ItemList = ({listP}) => {
    return (
        <ul>
        {listP.map((productos) => (
            <Items {...productos} key={productos.id}/>
        ))}
        </ul>
    );
};

export default ItemList;