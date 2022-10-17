import './style.css'
import {ArrowRightAlt} from "@mui/icons-material";
import img from '../../assets/ProdutosEmAlta/img-tennis-colecao2.png'
import { Link } from 'react-router-dom';

export default function ProdutosEmAlta () {
    return (
        <div className="div">
            <div className='texto-cabecalho'>  
                <h3 className='texto-cabecalho-titulo'>Produtos em alta</h3>
                <Link className='texto-cabecalho-link'to='/produtos'>Ver todos {<ArrowRightAlt/>}</Link>
            </div>
            <div className='div-lista'>
                <ul className='lista'>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <p className='item-desconto'>30% OFF</p>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <p className='item-desconto'>30% OFF</p>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                </ul>

                <ul className='lista2'>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
