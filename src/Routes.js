import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Filme from './Pages/Filmes'
import Header from './Components/Header'

function RouterApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/filme/:id' element={<Filme/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default RouterApp