import React from 'react';
import Items from './Items';


const ItemList = ({productosState}) => {
    return (
        <ul style={{display: 'flex'}}>
        {
            productosState.map(item => <Items item={item} key={item.id}/>)
        }   
        </ul>
    );
};

export default ItemList;