import img from '../../../../assets/Header/carrinho.svg'
import './style.css'

export default function Carrinho () {
    return (
        <div className='wrapper'>
            <img className='header-carrinho' src={img}></img>
            <div className='bolinha'>2</div>
        </div>
    );
}