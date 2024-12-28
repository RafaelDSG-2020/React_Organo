import Botao from '../Botao';
import  CampoTexto  from '../CampoTexto';
import  ListaSupensa  from '../ListaSuspensa';
import './Formulario.css';


export const Formulario = () => {
    const times = ["Frontend", "Backend", "Mobile", "UX", "UI", "Data Science"];
    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        console.log('Salvando dados');
    }
    return (
        <section className='formulario'> 
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>      
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSupensa obrigatorio={true} label="Time" itens={times} placeholder="Selecione um Time"/>
                <Botao> 
                    Criar Card
                </Botao> 
                {/* <button>Criar Card</button> */}
            </form>
        </section>
    );
}

// {`Digite seu ${props.placeholder}`}