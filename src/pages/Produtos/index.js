import "./style.css"
import FiltrarPor from "../../components/Produtos/FiltrarPor";
import ListarProdutos from "../../components/Produtos/ListaProdutos";
import AllCollapse from "../../components/Produtos/AllCollapse";

export default function Produtos () {
    return (
<<<<<<< HEAD
        <div className="fundoEscuro">
            <div className="caixa">
                <div className="caixa2">
                    <p className="parag-produto">Resultados para "Tênis" - <span className="parag-produto-numero-cinza">389 produtos</span> </p>
                    <AllCollapse className="collapse" />
                </div>


                <div className="caixa3">
                    <FiltrarPor className="filtrarpor" />
                    <ListarProdutos />
                </div>

            </div>
=======
        <div className="caixa">
            <div className="caixa2">
                <p>Resultados para "Tênis" - 389 produtos </p> 
                <AllCollapse className="collapse"/> 
            </div>          
            
            <div className="caixa3">
                <FiltrarPor className="filtrarpor"/>
                <ListarProdutos/>
            </div>            
>>>>>>> 757e50f6f8fc0bca26db56e0a48661cb7e87b661
        </div>
        
    );
}