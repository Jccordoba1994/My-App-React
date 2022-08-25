import React from 'react';
import './App.css';
import Navbar from './Fragmentos/Navbar';
import ItemListContainer from '../Components/Fragmentos/ItemListContainer'


const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting ='CATALOGO: Proximamente...' />
        </>
    );
}

export default App;
