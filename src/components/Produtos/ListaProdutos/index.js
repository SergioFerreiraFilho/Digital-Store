import img from '../../../assets/ProdutosEmAlta/img-tennis-colecao.png'


export default function ListarProdutos(){
    return (
        <div>
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