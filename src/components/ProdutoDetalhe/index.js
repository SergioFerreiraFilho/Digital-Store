import React, { useState } from 'react';
import CarouselProduto from 'react-bootstrap/Carousel';
import tenisProduto from './../../assets/CarouselProduto/TenisProduto.svg';
import { Star, StarBorder } from '@mui/icons-material';
import "./style.css"

export default function ProdutoDetalhe() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className='divProdutoDetalhe fundoEscuro'>
            <div className='containerProdutoDetalhe'>
                <CarouselProduto interval={null} className='carouselProdutoDetalhe' activeIndex={index} onSelect={handleSelect}>
                    <CarouselProduto.Item>
                        <img
                            className="imagemProdutoDetalhe"
                            src={tenisProduto}
                            alt="First slide"
                        />
                    </CarouselProduto.Item>
                    <CarouselProduto.Item>
                        <img
                            className="imagemProdutoDetalhe"
                            src={tenisProduto}
                            alt="Second slide"
                        />
                    </CarouselProduto.Item>
                    <CarouselProduto.Item>
                        <img
                            className="imagemProdutoDetalhe"
                            src={tenisProduto}
                            alt="Third slide"
                        />
                    </CarouselProduto.Item>
                </CarouselProduto>
            </div>
            <div className='containerProdutoDetalhe2'>
                <h1 className='titulo-produtoDetalhe'>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                <p className='ref-produtoDetalhe'>Casual | Nike | REF:38416711</p>
                <p>
                    <Star className='estrela'/>
                    <Star className='estrela'/>
                    <Star className='estrela'/>
                    <Star className='estrela'/>
                    <StarBorder className='estrela-vazia'/>
                </p>
                <p ><span className='preco-produtoDetalhe'>R$ 219,00</span> <s className='riscadoProduto'>219,00</s></p>
                <p className='descricao-produtoDetalhe'>Descrição produto</p>
                <p className='parag-produtoDetalhe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                <p className='tamanhoTennis-produtoDetalhe'>Tamanho</p>
                <button className='buttonTamanhoTennis'>39</button>
                <button className='buttonTamanhoTennis'>40</button>
                <button className='buttonTamanhoTennis'>41</button>
                <button className='buttonTamanhoTennis'>42</button>
                <button className='buttonTamanhoTennis'>43</button>
                
                <div className='bola1'></div>
                <div className='bola2'></div>
                <div className='bola3'></div>
                <div className='bola4'></div>
                <button className='botaoComprar-produtoDetalhe'>COMPRAR</button>

            </div>
        </div>

    );
}