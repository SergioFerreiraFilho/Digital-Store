import "./style.css";
import { Search} from '@mui/icons-material';

export default function Input () {

    const  semHeader = (a, b) =>{
        if(a === location.pathname || b === location.pathname){
            return "semHeader"
        }else {
            return  "header-input";
        }
    }

    return (
        <div className={semHeader('/cadastrar', '/login')}>
            <input className="header-input-input" placeholder="Pesquisar produto..."/>
            <div>
                <Search className="lupa"/>
            </div>
            
        </div>
    );
}