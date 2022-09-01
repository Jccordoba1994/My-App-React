import React, {useState, useEffect} from 'react';
import Item from './Item';
import './ItemList.css';

const productos = [
        {id: '0', title:'Champagne', price: 120, stock: 15, imageurl: "https://cdn.pixabay.com/photo/2016/11/19/23/09/dom-perignon-1841615_1280.jpg" },
        {id: '1', title:'Vino', price: 100, stock: 25, imageurl: "https://cdn.pixabay.com/photo/2015/10/28/15/10/wine-1010656_1280.png"},
        {id: '2', title:'Gin', price: 90, stock: 10, imageurl: "https://cdn.pixabay.com/photo/2017/05/10/08/05/gin-2300126_1280.png"},
        {id: '3', title:'Vodka', price: 150, stock: 19, imageurl: "https://cdn.pixabay.com/photo/2021/02/01/02/24/hip-5969096_1280.jpg"}
    ];

function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res (productos)
        } else {
            rej('Acceso denegado')
        }
    })
}

const ItemList = () => {
    
    const [productos, setProductos] = useState ([]);

    useEffect(() => {
        consultarPromesa(true)
    .then(data => {
        const productosJSX = data.map((producto, indice) => 
            <div className="card border-primary mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
                <div className="card-header">{producto.title}</div>
                <div className="card-body">
                    <img className="imagenes" src={producto.imageurl} alt="" />
                    <p className="card-text"> ${producto.price}</p>
                    <Item/>
                    <p className="card-text1"> Stock: {producto.stock}</p>
                </div>
            </div>
        )
        setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })

    }, []);
    
    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemList;