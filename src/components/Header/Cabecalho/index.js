import { Link,useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Input from "./Input";
import Carrinho from "./Carrinho";
import logo from '../../../assets/Header/logo.svg';
import "./style.css";

export default function Cabecalho() {
    // script para fazer com que ao clicar na logo ou no nome da empresa leve a pag Home
    const navigate = useNavigate();
    const irParaHome = () => navigate('/')
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        element.addEventListener('click',irParaHome );
    }, []);
 
 
    const location = useLocation();

    const semCadastrase = (a, b) =>{
        if(a === location.pathname || b === location.pathname){
            return "semCadastrase"
        }else {
            return  "header-cadastrese"
        }
    }

    const  semButton = (a, b) =>{
        if(a === location.pathname || b === location.pathname){
            return "semButton"
        }else {
            return  "header-button"
        }
    }

    const titulo = (a ,b) => {
        if ( a === location.pathname || b === location.pathname){
            return "header-h2-layout";
        }else {
            return  "header-h2";
        }
    }

    const logoHeader = (a ,b) => {
        if ( a === location.pathname || b === location.pathname){
            return "logo-layout";
        }else {
            return  "header-logo";
        }
    }

    
    return (
        <div className="header-principal">
            <div className="header-logo-name" ref={ref}>
            <img className={logoHeader('/cadastrar', '/login')} src={logo} />
            <h2 className={titulo('/cadastrar', '/login')}>Digital Store</h2>
            </div>
            <Input />
            <Link to="/cadastrar" href="paginaDeCadastro" className={semCadastrase('/cadastrar', '/login')}>Cadastre-se</Link>
            <button className={semButton('/cadastrar', '/login')}><Link className="header-entrar" to="/login">Entrar</Link></button>
            <Carrinho />
        </div>
    );
}