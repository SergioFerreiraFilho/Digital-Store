import img from '../../../assets/ProdutosEmAlta/img-tennis-colecao.png';
// import './style.css'


export default function ListarProdutos(){
    return (
        <div>  
            {/* Marcelo tem que trova os nomes das className pra começar a estilizar
            essas className é da home que eu fiz, criei o arquivo style lá em cima  */}
            <div className='div-lista'>
                <ul className='lista'>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <p className='item-desconto'>30% OFF</p>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <p className='item-desconto'>30% OFF</p>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                    <li className='item'>
                        <img className='item-img' src={img}/>
                        <h5 className='item-titulo'>Tênis</h5>
                        <p className='item-para'>K-Swiis V8 - Masculino</p>
                        <p className='item-para2'><s className='riscado'>$200</s> $100</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}