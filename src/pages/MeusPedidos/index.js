import { useState } from "react";
import MeusPedidosSelecionados from "../../components/MeusPedidosSelecionados";
import MinhasInformacoes from "../../components/MinhasInformacoes";
import "./style.css"

export default function MeusPedidos() {
    const [item, setItem] = useState(<MeusPedidosSelecionados/>);
    const [cssMeusPedidos, setCssMeusPedidos] = useState('setMeusPedidos-cor');
    const [cssInformacao, setCssInformacao] = useState('LinkA-MeusPedidos')

    const selecionadoMeusPedidos = () => {
        setItem(<MeusPedidosSelecionados/>);
        setCssMeusPedidos('setMeusPedidos-cor');
        setCssInformacao('LinkA-MeusPedidos');
    }

    const selecionadoMinhasInformacao = ()=> {
        setItem(<MinhasInformacoes/>);
        setCssInformacao('setLinkA-MeusPedidos');
        setCssMeusPedidos('MeusPedidos-cor');
    }


    return (
        <div className="MeusPedidos-body">
            <div>
                <div className="MeuPerfil-body">
                    <span className="MeusPedidos-span">
                        
                        Meu Perfil

                        <hr className="MeuPerfil-hr" />

                        <a onClick={ () => selecionadoMeusPedidos()} className="LinkA-MeusPedidos">
                            <p className={cssMeusPedidos}>
                                Meus Pedidos 
                                <hr className="MeuPerfil-hr" />
                            </p>
                        </a>
                        <a onClick={ () => selecionadoMinhasInformacao()} className={cssInformacao}>
                            Minhas informações 
                            <hr className="MeuPerfil-hr" />
                        </a>
                            Metodos Pagamentos 
                        <hr className="MeuPerfil-hr" />
                    </span>
                </div>
                <div>
                    {item}
                </div>
            </div>
        </div>
    )
}

