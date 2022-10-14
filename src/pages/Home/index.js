import OfertaEspecial from '../../components/OfertaEspecial';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../../components/Carousel';


export default function Home (){

    return (
        <div>
            <Carousel />            
            <OfertaEspecial />
        </div>
    );
}