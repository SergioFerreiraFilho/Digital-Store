import "./style.css"

export default function MinhasInformacoes() {
    return (
        <div className="MinhasInformacoes-body">
            <div>
                <div className="divisao1">
                    <span className="Span-MinhasInformacoesTitulo">Minhas Informações <a className="LinkA-MinhasInformações">Editar</a></span>
                    <hr/>
                    <p className="Span-InformacoesPessoais">Informações Pessoais</p>
                    <span className="Span-Nome">Nome:</span>
                    <span className="Span-Informacao">  Francisco Antonio Pereira</span><br/>
                    <span className="Span-Nome">CPF:</span>
                    <span className="Span-Informacao">  123456789-13</span><br/>
                    <span className="Span-Nome">Email:</span>
                    <span className="Span-Informacao">  francisco@gmail.com</span><br/>
                    <span className="Span-Nome">Celular:</span>
                    <span className="Span-Informacao">  (85) 5555-5555</span><br/>
                    <hr/>
                </div>
                <p className="Span-Informacoesdeentrega">Informações de Entrega</p>
                
                <span className="Span-Nome">Endereço:</span>
                <span className="Span-Informacao">  Rua João Pessoa, 333</span><br/>
                <span className="Span-Nome">Bairro:</span>
                <span className="Span-Informacao">  Centro</span><br/>
                <span className="Span-Nome">Cidade:</span>
                <span className="Span-Informacao">  Fortaleza, Ceará</span><br/>
                <span className="Span-Nome">CEP:</span>
                <span className="Span-Informacao">  433-8800</span><br/>
            </div>
        </div>
    )
}