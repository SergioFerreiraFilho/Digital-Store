import Cabecalho from "./Cabecalho";
import Nav from "./Nav";
import "./style.css"

export default function Header() {
    return (
        <div className="container-header">
            <div className="header-header">
                <Cabecalho />
                <Nav />
            </div>
        </div>        
    );
}