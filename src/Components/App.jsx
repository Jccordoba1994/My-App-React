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
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/franquicias' element={<Franquicias />} />
                <Route path='/categoria/:categoria' element={<ItemListContainer />} />
                <Route path='/detalles/:id' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>Error 404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;