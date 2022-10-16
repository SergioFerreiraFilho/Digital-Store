import "./style.css"

export default function FiltrarPor(){
    return (
        <div className="container">
            <aside className="col">
                <h2>filtrar por</h2>
                <hr></hr>
                <h2>Marka</h2>
                <form>
                <input id="addidas" type="checkbox"/>
                <label for="addidas"> Addidas</label>

                <input id="calenciaga" type="checkbox"/>
                <label for="calenciaga">Calenciaga</label>

                <input id="kswiss" type="checkbox"/>
                <label for="kswiss"> K-Swiss</label>

                <input id="nike" type="checkbox"/>
                <label for="nike"> Nike</label>

                <input id="puma" type="checkbox"/>
                <label for="puma"> Puma</label>
                
                <h2>Categoria</h2>
                <input id="esporte" type="checkbox"/>
                <label for="esporte"> Esporte e lazer</label>
                
                <input id="casual" type="checkbox"/>
                <label for="casual"> Casual</label>

                <input id="ultilitario" type="checkbox"/>
                <label for="ultilitario"> Ultilitario</label>
                
                <input id="corrida" type="checkbox"/>
                <label for="corrida"> Corrida</label>
                
                <h2>Genero</h2>

                <input id="masculino" type="checkbox"/>
                <label for="masculino"> Masculino</label>

                <input id="feminino" type="checkbox"/>
                <label for="feminino">Feminino</label>

                <input id="unisex" type="checkbox"/>
                <label for="unisex">Unisex</label>
                <h2>Estado</h2>

                <input id="novo" type="radio"/>
                <label for="novo"> Novo</label>
                
                <input id="usado" type="radio"/>
                <label for="usado">Usado</label>

                </form>
            </aside>
            
        </div>
    )
}