import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import tenis1 from "../../assets/CarouselImg/tenis.svg";
import bolinha2 from "../../assets/CarouselImg/bolinha2.svg";
import retangulo from "../../assets/CarouselImg/retangulo.svg";

import './style.css'



export default function CarouselImagem() {
  return (
    <Carousel className="carousel-principal">
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${retangulo})` }} className="linha">

          <img className="bolinha2" src={bolinha2} alt="bolinha2" />
          <img className="tenis1" src={tenis1} alt="tenis1" />
        </div>
        <Carousel.Caption className="esquerda">
          <div className="wrapper-frase1">
            <p className="frase1"> Melhores ofertas personalizadas</p>
          </div>

          <div className="wrapper-frase2">
            <h2 className='frase2'>
              Queima de <br />stoque Nike 🔥
            </h2>
          </div>
          <div className="wrapper-frase3">
            <p className="frase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="wrapper-button1">
            <a href="">
              <button className="botao-ofertas">Ver Ofertas</button>
            </a>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ backgroundImage: `url(${retangulo})` }} className="">
          <img className="bolinha2" src={bolinha2} alt="bolinha2" />
          <img className="tenis1" src={tenis1} alt="" />
        </div>
        <Carousel.Caption className="esquerda">
          <div className="wrapper-frase1">
            <p className="frase1"> Melhores ofertas personalizadas</p>
          </div>

          <div className="wrapper-frase2">
            <h2 className='frase2'>
              Queima de <br />stoque Nike 🔥
            </h2>
          </div>
          <div className="wrapper-frase3">
            <p className="frase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="wrapper-button1">
            <a href="">
              <button className="botao-ofertas">Ver Ofertas</button>
            </a>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ backgroundImage: `url(${retangulo})` }} className="">
          <img className="bolinha2" src={bolinha2} alt="bolinha2" />
          <img className="tenis1" src={tenis1} alt="" />
        </div>
        <Carousel.Caption className="esquerda">
          <div className="wrapper-frase1">
            <p className="frase1"> Melhores ofertas personalizadas</p>
          </div>

          <div className="wrapper-frase2">
            <h2 className='frase2'>
              Queima de <br />stoque Nike 🔥
            </h2>
          </div>
          <div className="wrapper-frase3">
            <p className="frase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="wrapper-button1">
            <a href="">
              <button className="botao-ofertas">Ver Ofertas</button>
            </a>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ backgroundImage: `url(${retangulo})` }} className="linha">

          <img className="bolinha2" src={bolinha2} alt="bolinha2" />
          <img className="tenis1" src={tenis1} alt="tenis1" />
        </div>
        <Carousel.Caption className="esquerda">
          <div className="wrapper-frase1">
            <p className="frase1"> Melhores ofertas personalizadas</p>
          </div>

          <div className="wrapper-frase2">
            <h2 className='frase2'>
              Queima de <br />stoque Nike 🔥
            </h2>
          </div>
          <div className="wrapper-frase3">
            <p className="frase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="wrapper-button1">
            <a href="">
              <button className="botao-ofertas">Ver Ofertas</button>
            </a>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

