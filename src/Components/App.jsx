import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Fragmentos/Navbar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Contacto from './Contacto';
import Franquicias from './Franquicias';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer />}></Route>
                <Route path='/contacto' element={<Contacto />}></Route>
                <Route path='/franquicias' element={<Franquicias />}></Route>
                <Route path='/categoria/:categoria' element={<ItemListContainer />}></Route>
                <Route path='/detalles/:id' element={<ItemDetailContainer />}></Route>
                <Route path='*' element={<h1>Error 404</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;