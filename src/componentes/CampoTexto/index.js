import './CampoTexto.css';
//Mesma coisa de declarar o function // Isso é a Arrow function
const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input type="text" required={props.obrigatorio} placeholder={props.placeholder}/>
      {/* <input type="text" />
      <button>Adicionar</button> */}
    </div>
  );
}

export default CampoTexto;