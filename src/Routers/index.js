import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import MeusPedidos from "../pages/MeusPedidos";
import Categorias from "../pages/Categorias";
import Header from "../components/Header";
import Cadastrar from "../components/Cadastrar";
import Login from "../components/Login";
import ProdutoDetalhe from "../components/ProdutoDetalhe";
import Footer from "../components/Footer";


export default function Routers(){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="/produtos" element={<Produtos/>}/>
                    <Route  path="/categorias" element={<Categorias/>}/>
                    <Route  path="/meus-pedidos" element={<MeusPedidos/>}/>
                    <Route path="/cadastrar" element={<Cadastrar/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/produto-detalhe" element={<ProdutoDetalhe/>}/>
                </Routes>
                <Footer/>
        </BrowserRouter>
    );
}