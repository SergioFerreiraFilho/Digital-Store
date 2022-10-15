import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./style.css";
import logofooter from "../../assets/Footer/logofooter.svg";


export default function Footer () {
    return (
        <footer className="footer-principal">
            <div className='div-margin-padrao'>
            <div className="div-digitalstore">
                <div className='div-footer-img'>
                    <img className="div-imgfooter" src={logofooter}/>
                    <h2 className='nome-digital'>Digital Store</h2>
                </div>
                <span className='texto-footer'>
                Lorem ipsum dolor sit amet, consectetur<br/>
                adpiscing elit, sed do eiusmod tempor<br/>
                incididunt ut labore et dolore
                </span>
                <div className='icons-footer'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>

            <div>
                <h3  className='informacao-titulo'>Informação</h3>
                <ul  className='informacao2'>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishlist</li>
                    <li>Blog</li> 
                    <li>Trabalhe conosco</li>   
                    <li>Meus pedidos</li>                  
                </ul>

            </div>

            <div>
                <h3 className='categoria-titulo'>Categorias</h3>
                <ul className='categoria-footer'>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonés</li>
                    <li>Headphones</li> 
                    <li>Tênis</li>                   
                </ul>
            </div>

            <div>
                <h3 className='contato-titulo'>Contato</h3>
                <p className='contato-footer'>Av. Santos Dumont, 1510-1 <br/>
                andar- Aldeota, Fortaleza<br/>
                CE, 60150-161<br/>
                (85) 3051-3411<br/></p>
            </div>
            {/* <hr/> */}

            {/* <div className='final-footer'>
                <p>@2022 Digital College</p>
            </div> */}
            </div>
        </footer>
    );
}