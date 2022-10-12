import "./style.css";
import elipse from "../../assets/OfertaEspecial/elipse-tenis.svg";
import tenis from "../../assets/OfertaEspecial/tenis-oferta-especial.svg";

export default function OfertaEspecial() {
  return (
    <section className="oferta-especial">
      <div style={{ backgroundImage: `url(${elipse})` }} className="esquerda">
        <img className="tenis" src={tenis} alt="" />
        {/* <img className="elipse" src={elipse} alt="" /> */}
      </div>
      <div className="direita">
        <div className="wrapper-texto1">
          <p className="texto1">Oferta especial</p>
        </div>
        <div className="wrapper-texto2">
          <h2 className="texto2">Air Jordan edição de colecionador</h2>
        </div>
        <div className="wrapper-texto3">
          <p className="texto3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do br
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
        <div className="wrapper-button">
          <a href="">
            <button className="botao-ver-oferta">Ver Oferta</button>
          </a>
        </div>
      </div>
    </section>
  );
}
