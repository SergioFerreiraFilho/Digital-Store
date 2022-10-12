import {Link} from "react-router-dom";
import "./style.css";


export default function Nav() {
    return (
        <nav>
            <Link className="home" to="/" >Home</Link>
            <Link className="produtos" to="/produtos" >Produtos</Link>
            <Link className="categorias" to="/categorias" >Categorias</Link>
            <Link className="meus-pedidos" to="/meus-pedidos" >Meus Pedidos</Link>
        </nav>
    );
}