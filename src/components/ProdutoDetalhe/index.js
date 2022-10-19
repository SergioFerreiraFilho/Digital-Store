import React, { useState } from 'react';
import CarouselProduto from 'react-bootstrap/Carousel';
import tenisProduto from './../../assets/CarouselProduto/TenisProduto.svg'
import "./style.css"

export default function ProdutoDetalhe() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className='divProdutoDetalhe'>
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
                <h1 className='titulo'>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                <p className='ref'>Casual | Nike | REF:38416711</p>
                <p>estrelas icone</p>
                <p className='preco'>R$ 219,00<s className='riscadoProduto'>219,00</s></p>
                <p>Descrição produto</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <p>Tamanho</p>
                <button>39</button>
                <button>40</button>
                <button>41</button>
                <button>42</button>
                <button>43</button>
                <p>Tamanho</p>
                <div className='bola1'></div>
                <div className='bola2'></div>
                <div className='bola3'></div>
                <div className='bola4'></div>
                <button className='botaoComprar'>COMPRAR</button>

            </div>
        </div>

    );
}