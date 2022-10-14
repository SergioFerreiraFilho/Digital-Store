import "./style.css"
import camisa from "../../assets/ColecaoemDestaque2/camisa.svg"
import calca from "../../assets/ColecaoemDestaque2/calca.svg"
import headphone from "../../assets/ColecaoemDestaque2/headphone.svg"
import tenis from "../../assets/ColecaoemDestaque2/tenis.svg"

export default function ColecaoEmDestaque2() {
    return(
        <div className="div"> 
            <h1 className="colecaoemdestaque2-h1">
                Coleções em destaque
            </h1>
            <div className="divisão-principal">
            <div className="divisao-camisa-principal">
                <div className="divisao-camisa">
                    <img className="camisa" src={camisa}></img>
                </div>
                    <span className="span-camisa">Camisetas</span>
            </div>
            <div className="divisao-calca-principal">
                <div className="divisao-calca">
                    <img className="camisa" src={calca}></img>
                </div>
                    <span className="span-calca">Calças</span>
            </div>
            <div className="divisao-calca-principal">
                <div className="divisao-calca">
                    <img className="" src={calca}></img>
                </div>
                    <span className="span-calca">Bonés</span>
            </div>
            <div className="divisao-headphone-principal">
                <div className="divisao-headphone">
                    <img className="camisa" src={headphone}></img>
                </div>
                    <span className="span-headphone">Headphones</span>
            </div>
            <div className="divisao-tenis-principal">
                <div className="divisao-tenis">
                    <img src={tenis}></img>
                </div>
                    <span className="span-tenis">Tênis</span>
            </div>
            
            </div>
        </div>
    )
}