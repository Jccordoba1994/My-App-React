import React from 'react';
import Navbar from './Fragmentos/Navbar';
import ItemListContainer from './ItemListContainer';
import './App.css';

const App = () => {
    const onAdd = () => {
        console.log();
    }
    return (
        <>
            <Navbar/>
            <ItemListContainer/>
        </>
    );
}

export default App;
