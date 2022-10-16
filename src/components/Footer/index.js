import logoface from '../../assets/Footer/logoface.svg';
import logoinsta from '../../assets/Footer/logoinsta.svg';
import logott from '../../assets/Footer/logott.svg';
import logofooter from '../../assets/Footer/logofooter.svg'
import "./style.css";


export default function Footer () {
    return (
        <section className="footer-principal">
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
                        <img className='icon-face' src={logoface}/>
                        <img className='icon-insta'src={logoinsta}/>
                        <img className='icon-tt' src={logott}/>
                    </div>
                </div>

                <div className='div-informacao'>
                    <h3 className='informacao-titulo'>Informação</h3>
                    <ul className='informacao2'>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li> 
                        <li>Trabalhe conosco</li>   
                        <li>Meus pedidos</li>                  
                    </ul>

                </div>

                <div className='categoria-geral'>
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
               
            </div>
            <hr className='hr-footer'/> 

            {/* <span className='finalfooter'> */}
                 @2022 Digital College
            {/* </span> */}
            
                
        </section>
    );
}