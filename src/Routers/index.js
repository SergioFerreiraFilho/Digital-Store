import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import MeusPedidos from "../pages/MeusPedidos";
import Categorias from "../pages/Categorias";
import Header from "../components/Header";


export default function Routers(){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="/produtos" element={<Produtos/>}/>
                    <Route  path="/categorias" element={<Categorias/>}/>
                    <Route  path="/meusPedidos" element={<MeusPedidos/>}/>
                </Routes>
        </BrowserRouter>
    );
}