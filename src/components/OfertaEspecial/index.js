import "./style.css";
import tenis from "./tenis-oferta-especial.svg";
import elipse from "./elipse-tenis.svg";

export default function OfertaEspecial() {
  return (
    <section className="oferta-especial">
      <div className="esquerda">
        <img className="tenis" src={tenis} alt="" />
        <img className="elipse" src={elipse} alt="" />
      </div>
      <div className="direita">
        <div className="wrapper-texto1">
          <span className="texto1">Oferta especial</span>
        </div>
        <div className="wrapper-texto2">
          <p className="texto2">Air Jordan edição de colecionador</p>
        </div>
        <div className="wrapper-texto3">
          <p className="texto3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do br
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
        <div className="wrapper-button">
          <button>Ver Oferta</button>
        </div>
      </div>
    </section>
  );
}
