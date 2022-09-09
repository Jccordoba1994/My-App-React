import React from 'react';
import Navbar from './Fragmentos/Navbar';
import ItemListContainer from './ItemListContainer';
import './App.css';
import ItemDetailContainer from './ItemDetailContainer';

const App = () => {
    const onAdd = () => {
        console.log();
    }
    return (
        <div className='row'>
            <Navbar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </div>
    );
}

export default App;