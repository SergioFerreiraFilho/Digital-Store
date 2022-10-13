import OfertaEspecial from '../../components/OfertaEspecial';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrosel from '../../components/Carousel/carrossel';

export default function Home (){

    return (
        <div>
            <Carrosel/>
            <OfertaEspecial />
        </div>
    );
}