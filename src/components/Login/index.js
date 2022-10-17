import gmail from "../../assets/Login/gmail.svg";
import facebook from "../../assets/Login/facebook.svg";

import './styles.css';

export default function Login() {
    return (
            <div className="gradiente">
                <div className="container-login">
                    <form className="form-login">
                        <div className="Acess-acc">
                            <h1>Acesse sua conta</h1>
                        </div>
                        <br/>

                        <div className="register-login">Novo cliente? Então registre-se <a href="" className="link-aqui">aqui</a></div>
                        <br/>
                        
                            <label>Login *</label>
                            <input className="input" type="email" placeholder="Insira seu login ou email"/>
                            
                            <label>Senha *</label>
                            <input className="input" type="password"placeholder="Insira sua senha"/>
                            
                        <a href="" className="forgot-password">Esqueci minha senha.</a>
                            
                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Acessar Conta</button>
                        </div>
                        <div className="text-login1">
                            Ou faça login com
                            <img src={gmail}/> 
                            <img src={facebook}/>
                        </div>
                    </form>  
                </div> 
            </div>
    );
}