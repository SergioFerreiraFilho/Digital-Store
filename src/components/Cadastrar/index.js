import React from "react";
import { Divider } from "@mui/material"
import "./style.css"

export default function Cadastrar () {
    return (
        <div className="gradiente-cadas">
            <h1 className="create-acc">Criar Conta</h1>

                <div className="form-cadastro">
                        <h1>Informações pessoais</h1>
                        <hr/>

                        <label>Nome completo *</label>
                        <input className="input-cadast" placeholder="Insira seu nome" required='' type='text'/>

                        <label>CPF *</label>
                        <input className="input-cadast" placeholder="Insira seu CPF" type='text'/>

                        <label>E-mail *</label>
                        <input className="input-cadast" placeholder="Insira seu email" type='email'/>

                        <label>Celular *</label>
                        <input className="input-cadast" placeholder="Insira seu Celular" type='phone'/>
                </div>
                <br/>
                <div className="form-cadastro-entrega">
                        <h1>Informações de Entrega</h1>
                        <Divider/>

                        <label>Endereço *</label>
                        <input className="input-cadast" placeholder="Insira seu endereço" type='text'/>

                        <label>Bairro *</label>
                        <input className="input-cadast" placeholder="Insira seu bairro" type='text'/>

                        <label>Cidade *</label>
                        <input className="input-cadast" placeholder="Insira sua cidade" type='email'/>

                        <label>CEP *</label>
                        <input className="input-cadast" placeholder="Insira seu CEP" type='number'/>

                        <label>Complemento </label>
                        <input className="input-cadast" placeholder="Insira complemento" type='text'/>
                </div>
                <hr/>
                <div>
                <input className="checkbox-cadast" type="checkbox"/>
                <span className="receive-email"> Quero receber por email ofertas e novidades das lojas da Digital Store. 
                A frequência de envios pode <br/> 
                variar de acordo com a interação do cliente. </span>
                </div>

                <div className="container-cadastro-form-btn">
                    <button className="cadastro-form-btn">Criar Conta</button>
                </div>
        </div>
    );
}