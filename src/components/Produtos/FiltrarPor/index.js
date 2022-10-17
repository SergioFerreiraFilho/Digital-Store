import "./style.css"


export default function FiltrarPor(){
    return (
        <div className="container">
            <aside className="col">
                <h2>filtrar por</h2>
                <hr></hr>
                <h2>Marka</h2>
                <form>
                <div>
                <input id="addidas" type="checkbox"/>
                <label for="addidas"> Addidas</label>
                </div>
                <input id="calenciaga" type="checkbox"/>
                <label for="calenciaga">Calenciaga</label>
                <div>
                <input id="kswiss" type="checkbox"/>
                <label for="kswiss"> K-Swiss</label>
                </div>
                <input id="nike" type="checkbox"/>
                <label for="nike"> Nike</label>
                <div>
                <input id="puma" type="checkbox"/>
                <label for="puma"> Puma</label>
                </div>
                <h2>Categoria</h2>
                <div>
                <input id="esporte" type="checkbox"/>
                <label for="esporte"> Esporte e lazer</label>
                </div>
                <input id="casual" type="checkbox"/>
                <label for="casual"> Casual</label>
                <div>
                <input id="ultilitario" type="checkbox"/>
                <label for="ultilitario"> Ultilitario</label>
                </div>
                <input id="corrida" type="checkbox"/>
                <label for="corrida"> Corrida</label>
                
                <h2>Genero</h2>
                <div>
                <input id="masculino" type="checkbox"/>
                <label for="masculino"> Masculino</label>
                </div>
                <input id="feminino" type="checkbox"/>
                <label for="feminino">Feminino</label>
                <div>
                <input id="unisex" type="checkbox"/>
                <label for="unisex">Unisex</label>
                </div>
                <h2>Estado</h2>
                <div>
                <input id="novo" type="radio"/>
                <label for="novo"> Novo</label>
                </div>
                <input id="usado" type="radio"/>
                <label for="usado">Usado</label>

                </form>
            </aside>
            
        </div>
    )
}