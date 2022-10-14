import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./style.css"


export default function Footer () {
    return (
        <footer className="footer-principal">
            <div>
                <img src=''></img>
                <h2 className='nome-digital'>Digital Store</h2>
            </div>

            <div className='texto-footer'>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p>adpiscing elit, sed do eiusmod tempor</p>
                <p>incididunt ut labore et dolore</p>
            </div>

            <div className='icons-footer'>
                <ul>
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                </ul>
            </div>

            <div className='informacao-footer'>
                <h4>Informação</h4>
                <ul>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishlist</li>
                    <li>Blog</li> 
                    <li>Trabalhe conosco</li>   
                    <li>Meus pedidos</li>                  
                </ul>

            </div>

            <div className='categoria-footer'>
                <h4>Categorias</h4>
                <ul>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonés</li>
                    <li>Headphones</li> 
                    <li>Tênis</li>                   
                </ul>
            </div>

            <div className='contato-footer'>
                <h4>Contato</h4>
                <p>Av. Santos Dumont, 1510-1</p>
                <p>andar- Aldeota, Fortaleza</p>
                <p>CE, 60150-161</p>
                <p>(85) 3051-3411</p>
            </div>
            <hr/>

            <div className='final-footer'>
                <p>@2022 Digital College</p>
            </div>
        </footer>
    );
}