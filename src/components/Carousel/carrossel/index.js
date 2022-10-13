import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Carrosselimagem from '..';


export default function Carrosel() {
    return(
        <div className='carrosel-principal'>
        <div className='carrosel-texto'>
        <span>Melhores ofertas personalizadas</span>
        <h1 className='carrossel-h1'>    
        QUEIMA DE STOQUE NIKE
        </h1>
        <span>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</span>
        </div>
        <div className='carrossel-imagem'>
        <Carrosselimagem/>
        </div>
        </div>
    )
}