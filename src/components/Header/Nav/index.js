import {Link} from "react-router-dom";


export default function Nav() {
    return (
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/produtos" >Produtos</Link>
            <Link to="/categorias" >Categoria</Link>
            <Link to="/meusPedidos" >Meus pedidos</Link>
        </nav>
    );
}