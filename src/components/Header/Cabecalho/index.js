import { Link,useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Input from "./Input";
import Carrinho from "./Carrinho";
import logo from '../../../assets/Header/logo.svg';
import "./style.css";

export default function Cabecalho() {
    // script para fazer que ao clicar na logo ou no nome da empresa leve a pag Home
    const navigate = useNavigate();
    const irParaHome = () => navigate('/')
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        element.addEventListener('click',irParaHome );
    }, []);

    return (
        <div className="header-principal">
            <div className="header-logo-name" ref={ref}>
            <img className="header-logo" src={logo} />
            <h2 className="header-h2">Digital Store</h2>
            </div>
            <Input />
            <Link to="/cadastrar" href="paginaDeCadastro" className="header-cadastrese">Cadastre-se</Link>
            <button className="header-button"><Link className="header-entrar" to="/login">Entrar</Link></button>
            <Carrinho />
        </div>
    );
}