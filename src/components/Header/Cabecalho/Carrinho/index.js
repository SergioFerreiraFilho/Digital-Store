import img from '../../../../assets/carrinho.svg'
import './style.css'

export default function Carrinho () {
    return (
        <div>
            <img src={img}></img>
            <div className='bolinha'>2</div>
        </div>
    );
}