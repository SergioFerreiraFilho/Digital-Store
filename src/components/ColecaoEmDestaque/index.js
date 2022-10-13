import './style.css'

export default function ColecaoEmDestaque () {
    return (
        <div className='containe'>
            <h2 className='titulo'>Coleções em destaque</h2>
            <ul className='lista'>
                <li className='lista-li-1'>
                    <div className='caixa'>
                        <p className='lista-li-p'>30% off</p>
                        <h3 className='lista-li-titulo'>Novo Drop</h3>
                        <h3 className='lista-li-titulo'>Supreme</h3>
                        <button className='lista-li-button'>Comprar</button>
                    </div>
                    
                </li>

                <li className='lista-li-2'>
                    <div className='caixa'>
                        <p className='lista-li-p'>30% off</p>
                        <h3 className='lista-li-titulo'>Coleção</h3>
                        <h3 className='lista-li-titulo'>Adidas</h3>
                        <button className='lista-li-button'>Comprar</button>
                    </div>
                    
                </li>

                <li className='lista-li-3'>
                    <div className='caixa'>
                        <p className='lista-li-p'>30% off</p>
                        <h3 className='lista-li-titulo'>Novo</h3>
                        <h3 className='lista-li-titulo'>Beats Bass</h3>
                        <button className='lista-li-button'>Comprar</button>
                    </div>
                    
                </li>
            </ul>
        </div>
    );
}
