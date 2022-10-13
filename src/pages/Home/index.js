import OfertaEspecial from '../../components/OfertaEspecial';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrosel from '../../components/Carousel/carrossel';
import ColecaoEmDestaque from '../../components/ColecaoEmDestaque';
import ColecaoEmDestaque2 from '../../components/ColecaoEmDestaque2';
import ProdutosEmAlta from '../../components/ProdutosEmAlta';
import './style.css';

export default function Home (){

    return (
        <div>
            <Carrosel/>
            {/* div criada para colocar o fundo mais escuro nessas seções */}
            <div className='fundoEscuro'>
                <ColecaoEmDestaque/>
                <ColecaoEmDestaque2/>
                <ProdutosEmAlta/>
            </div>
            
            <OfertaEspecial />
        </div>
    );
}