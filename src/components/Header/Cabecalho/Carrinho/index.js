import img from '../../../../assets/Header/carrinho.svg'
import './style.css'

export default function Carrinho () {
    return (
        <div>
            <img src={img}></img>
            <div className='bolinha'>2</div>
        </div>
    );
}