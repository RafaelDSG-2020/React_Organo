import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                <option value="">{props.placeholder}</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
                {/* {opcoes.map((opcao, index) => (
                    <option key={index} value={opcao}>{opcao}</option>
                ))} */}
            </select>
        </div>
    );
}


