import "./style.css"
import FiltrarPor from "../../components/Produtos/FiltrarPor";
import ListarProdutos from "../../components/Produtos/ListaProdutos";
import AllCollapse from "../../components/Produtos/AllCollapse";

export default function Produtos () {
    return (
        <div className="fundoEscuro">
            <div className="caixa-produtos">
                <div className="caixa2">
                    <p className="parag-produto">Resultados para "Tênis" - <span className="parag-produto-numero-cinza">389 produtos</span> </p>
                    <AllCollapse className="collapse" />
                </div>


                <div className="caixa3">
                    <FiltrarPor className="filtrarpor" />
                    <ListarProdutos />
                </div>

            </div>
        </div>
        
    );
}