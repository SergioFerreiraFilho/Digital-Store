import "./style.css";
import { Search} from '@mui/icons-material';

export default function Input () {
    return (
        <div className="header-input">
            <input className="header-input-input" placeholder="Pesquisar produto..."/>
            <div>
                <Search className="lupa"/>
            </div>
            
        </div>
    );
}