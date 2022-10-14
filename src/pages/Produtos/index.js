import "./style.css"
import FiltrarPor from "../../components/Produtos/FiltrarPor";
import ListarProdutos from "../../components/Produtos/ListaProdutos";
import AllCollapse from "../../components/Produtos/AllCollapse";

export default function Produtos () {
    return (
        <div className="caixa">
            <div>
                <p>Resultados para "Tênis" - 389 produtos </p>  
                <AllCollapse/>
            </div>
            <div className="caixa3">
                <FiltrarPor className="filtrarpor"/>
                <ListarProdutos/>
            </div>
            
        </div>
    );
}