import React from 'react';
import ItemCount from './Fragmentos/ItemCount';
import Navbar from './Fragmentos/Navbar';
import './App.css';

const App = () => {
    const onAdd = () => {
        console.log();
    }
    return (
        <>
            <Navbar/>
            <ItemCount className= 'contar' initial={1} stock={5} onAdd={onAdd}/>
        </>
    );
}

export default App;
