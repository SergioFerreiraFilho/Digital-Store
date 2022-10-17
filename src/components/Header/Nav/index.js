import {Link, useLocation} from "react-router-dom";
import "./style.css";    

export default function Nav() {
    const location = useLocation();

    const ativarHome = (url) => url === location.pathname ? "ativarHome" : "home";
    const ativarProdutos = (url) => url === location.pathname ? "ativarProdutos" : "produtos";
    const ativarCategorias = (url) => url === location.pathname ? "ativarCategorias" : "categorias";
    const ativarMeus_pedidos = (url) => url === location.pathname ? "ativarMeus-pedidos" : "meus-pedidos";
    const paginaSemNav = (a, b) =>{
        if(a === location.pathname || b === location.pathname){
            return "navegacao"
        }else {
            return "semNada" 
        }

    }


    return (
        <nav className={paginaSemNav('/cadastrar', '/login')}>
            <Link className={ativarHome('/')} to="/" >Home</Link>
            <Link className={ativarProdutos('/produtos')} to="/produtos" >Produtos</Link>
            <Link className={ativarCategorias('/categorias')} to="/categorias" >Categorias</Link>
            <Link className={ativarMeus_pedidos('/meus-pedidos')} to="/meus-pedidos" >Meus Pedidos</Link>
        </nav>
    );
}