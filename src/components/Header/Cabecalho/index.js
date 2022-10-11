import Input from "./Input";
import Carrinho from "./Carrinho";

export default function Cabecalho() {
    return(
        <div>
            <img src="#"/>
            <h2>Digital Store</h2>
            <Input />
            <a href="paginaDeCadastro">Cadastra-se</a>
            <button><a href="paginaDeLogin">Entrar</a></button>
            <Carrinho />
        </div>
    );
}