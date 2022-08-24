import React from 'react';
import {BsCart} from "react-icons/bs";
import './CartWidget.css';
import ItemListContainer from './ItemListContainer';


const CartWidget = () => {
    return (
        <>
            <BsCart className='carrito'/>
            <ItemListContainer cantidad='8'/>
        </>
    );
}

export default CartWidget;
