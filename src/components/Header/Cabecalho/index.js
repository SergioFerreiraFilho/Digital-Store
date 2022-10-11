import Input from "./Input";
import Carrinho from "./Carrinho";
import img from '../../../assets/Header/logo.svg'
import "./style.css"

export default function Cabecalho() {
    return(
        <div className="header-principal">
            <div className="header-logo-name">
            <img className="header-logo" src={img}/>
            <h2 className="header-h2">Digital Store</h2>
            </div>
            <Input />
            <a href="paginaDeCadastro">Cadastra-se</a>
            <button><a href="paginaDeLogin">Entrar</a></button>
            <Carrinho />
        </div>
    );
}