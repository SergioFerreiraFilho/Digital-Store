import img from '../../../../assets/Header/carrinho.svg';
import imgTennisCarrinho from '../../../../assets/Header/imgTennisCarrinho.png';
import './style.css';
import { useRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Carrinho() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        element.addEventListener('click', handleShow);
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NovoItem = () => {
        return(
            <div className='div1-novoItem'>
                <div className='div2-novoItem'>
                    <img className='img-novoItem' src={imgTennisCarrinho}/>
                </div>
                <div className='div3-novoItem'>
                    <h4>Tênis Nike Revolution</h4>
                    <h4>6 Next Nature</h4>
                    <h4>Masculino</h4>
                    <p> </p>
                    <p>R$ 219,00 <s className='riscado'>RS 219,00</s></p>
                </div>
            </div>
        );
    }

    const  semCarrinho = (a, b) =>{
        if(a === location.pathname || b === location.pathname){
            return "semCarrinho"
        }else {
            return  "";
        }
    }

    return (
        <div className={semCarrinho('/cadastrar', '/login')}>
            <div className='wrapper'>
                <img className='header-carrinho' ref={ref} src={img} />
                <div className='bolinha'>2</div>
            </div>
            
            <Modal className='modal-carrinho ' show={show} onHide={handleClose}>
                <Modal.Header className='mudandoMarginLados-header' >
                    <Modal.Title className='titulo-modal-carrinho'>Meu Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                     <NovoItem/>
                     <NovoItem/>
                </Modal.Body>
                <Modal.Footer className='mudandoMarginLados'>
                    <div className='div-modal-carrinho'>
                        <p className='p-modal1'>Valor total:</p>
                        <p className='p-modal2'>R$ 219,00</p>
                    </div>
                    <div className='div-modal-carrinho-button'>
                    <Button className='button-modal-1' onClick={handleClose}>
                        Esvaziar
                    </Button>
                    <Button  className='button-modal-2' onClick={handleClose}>
                        Ver Carrinho
                    </Button>
                    </div>
                </Modal.Footer>
            </Modal>            
        </div>
    );
}