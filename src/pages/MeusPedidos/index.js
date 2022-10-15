import MeuPerfil from "../../components/MeuPerfil";
import MeusPedidosSelecionados from "../../components/MeusPedidosSelecionados";
import "./style.css"

export default function MeusPedidos() {
    return (
        <div className="MeusPedidos-body">
            <div>
                <MeuPerfil/>
                <MeusPedidosSelecionados/>
            </div>
        </div>
    )
}

