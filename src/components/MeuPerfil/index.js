import "./style.css"

export default function MeuPerfil() {
    return (
        <div className="MeuPerfil-body">
            <span className="MeusPedidos-span">
                Meu Perfil<hr className="MeuPerfil-hr"/>
                <p className="MeusPedidos-cor">Meus Pedidos <hr className="MeuPerfil-hr"/></p>
                Minhas informações <hr className="MeuPerfil-hr"/>
                Metodos Pagamentos <hr className="MeuPerfil-hr"/>
            </span>
        </div>
    )
}