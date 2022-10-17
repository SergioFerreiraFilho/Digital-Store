
import imagemtenis from "../../assets/PedidosSelecionados/tenisquadrado.svg";

import "./style.css"

export default function MeusPedidosSelecionados() {
    return (
        <div className="meus-pedidos-selecionados-body">

            <div className="">
                <p className="meus-pedidos">Meus Pedidos</p>
                <p className="status">STATUS</p>
                <hr className="linha" />
            </div>

            <div className="coluna-geral">
                <img className="imagem-tenis" src={imagemtenis} />

                <div className="coluna-pedido">
                    <p className="numero-pedido">Pedido nº 2234981932</p>
                    <p className="descricao-produto">Tênis Nike Revolution 6 Next Nature Masculino</p>
                    <p className="status-produto">Produto em trânsito</p>
                </div>             
                
            </div> 
            <hr className="linha" />
            <div className="coluna-geral">
                <img className="imagem-tenis" src={imagemtenis} />

                <div className="coluna-pedido">
                    <p className="numero-pedido">Pedido nº 2234981932</p>
                    <p className="descricao-produto">Tênis Nike Revolution 6 Next Nature Masculino</p>
                    <p className="status-finalizado">Finalizado</p>
                </div>           
                
            </div>

            <hr className="linha" />
            <div className="coluna-geral">
                <img className="imagem-tenis" src={imagemtenis} />

                <div className="coluna-pedido">
                    <p className="numero-pedido">Pedido nº 2234981932</p>
                    <p className="descricao-produto">Tênis Nike Revolution 6 Next Nature Masculino</p>
                    <p className="status-cancelado">Cancelado</p>
                </div>           
                
            </div> 

            <hr className="linha" />
            <div className="coluna-geral">
                <img className="imagem-tenis" src={imagemtenis} />

                <div className="coluna-pedido">
                    <p className="numero-pedido">Pedido nº 2234981932</p>
                    <p className="descricao-produto">Tênis Nike Revolution 6 Next Nature Masculino</p>
                    <p className="status-finalizado">Finalizado</p>
                </div>           
                
            </div>  

        </div>
    )
}