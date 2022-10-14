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

                </form>
            </aside>
            
        </div>
    )
}