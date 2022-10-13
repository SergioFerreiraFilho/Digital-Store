import React, {useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../assets/Carrossel/tenis.png"
import './style.css'



export default function Carrosselimagem() {
    return (
        <Carousel className='caroulsel-principal'>
          <Carousel.Item>
            <img
              className="tenis"
              src={img}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="tenis"
              src={img}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>HABLAS SPANHOL</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="tenis"
              src={img}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="tenis"
              src={img}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
    
