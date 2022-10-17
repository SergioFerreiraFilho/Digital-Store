import "./style.css"

export default function FiltrarPor() {
    return (
        <div className="caixa-filtraPor">
            <aside className="aside-filtraPor">
                <h2 className="Titulo-master">Filtrar por</h2>
                <hr></hr>
                <form>
                    <h2 className="titulo-filtraPor">Marka</h2>

                    <div className="caixa-checkbox">
                        <div>
                            <input id="addidas" type="checkbox" className="checbox-filtrarPor" />
                            <label for="addidas" className="label-filtraPor"> Addidas</label>
                        </div>
                        <div>
                            <input id="calenciaga" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="calenciaga" className="label-filtraPor">Calenciaga</label>
                        </div>
                        <div>
                            <input id="kswiss" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="kswiss" className="label-filtraPor"> K-Swiss</label>
                        </div>
                        <div>
                            <input id="nike" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="nike" className="label-filtraPor"> Nike</label>
                        </div>
                        <div>
                            <input id="puma" type="checkbox" className="checbox-filtrarPor" />
                            <label for="puma" className="label-filtraPor"> Puma</label>
                        </div>
                    </div>

                    <h2 className="titulo-filtraPor">Categoria</h2>

                    <div className="caixa-checkbox">
                        <div>
                            <input id="esporte" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="esporte" className="label-filtraPor"> Esporte e lazer</label>
                        </div>
                        <div>
                            <input id="casual" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="casual" className="label-filtraPor"> Casual</label>
                        </div>
                        <div>
                            <input id="ultilitario" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="ultilitario" className="label-filtraPor"> Ultilitario</label>
                        </div>
                        <div>
                            <input id="corrida" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="corrida" className="label-filtraPor"> Corrida</label>
                        </div>
                    </div>


                    <h2 className="titulo-filtraPor">Genero</h2>

                    <div className="caixa-checkbox">
                        <div>
                            <input id="masculino" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="masculino" className="label-filtraPor"> Masculino</label>
                        </div>
                        <div>
                            <input id="feminino" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="feminino" className="label-filtraPor">Feminino</label>
                        </div>
                        <div>
                            <input id="unisex" type="checkbox" className="checbox-filtrarPor"/>
                            <label for="unisex" className="label-filtraPor">Unisex</label>
                        </div>
                    </div>

                    <h2 className="titulo-filtraPor">Estado</h2>

                    <div className="caixa-checkbox">
                        <div>
                            <input id="novo" type="radio" className="checbox-filtrarPor"/>
                            <label for="novo" className="label-filtraPor"> Novo</label>
                        </div>
                        <div>
                            <input id="usado" type="radio" className="checbox-filtrarPor"/>
                            <label for="usado" className="label-filtraPor">Usado</label>
                        </div>
                    </div>

                </form>
<<<<<<< HEAD
            </aside>

=======
            </aside>            
>>>>>>> 757e50f6f8fc0bca26db56e0a48661cb7e87b661
        </div>
    )
}