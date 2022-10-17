import Cabecalho from "./Cabecalho";
import Nav from "./Nav";
import "./style.css"

const layout = (a ,b) => {
    if ( a === location.pathname || b === location.pathname){
        return "layoutSoHeader";
    }else {
        return  "container-header";
    }
}

export default function Header() {
    return (
        <div className={layout('/cadastrar', '/login')}>
            <div className="header-header">
                <Cabecalho />
                <Nav />
            </div>
        </div>
        
    );
}