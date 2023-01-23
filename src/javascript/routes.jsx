import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import Cardapio from '../pages/cardapio/index';
export default function Index(){
    return(        
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cardapio' element={<Cardapio/>} />
        </Routes>
    </BrowserRouter>
    );
}