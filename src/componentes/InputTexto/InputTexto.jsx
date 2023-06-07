import PropTypes from "prop-types"
import "./InputTexto.css";

const InputTexto = (props) => {
  //f actualizar el valor de los inputs useState (setValor) de Formulario.jsx
  const actualizarValor=(e)=>{
    props.actualizarValor(e.target.value);
  }
  return (
    <>
      <label className="label__Form" htmlFor={props.label}>
        {props.label}
      </label>
      <input autoComplete="off"
        className="input__TextForm"
        type="text"
        name={props.name}
        id={`ID-${props.name}`}
        placeholder={`Ingresar ${props.placeholder}`}
        onChange={actualizarValor}
        value={props.valor}
        required={props.required}
      />
    </>
  );
};

InputTexto.propTypes = {
  actualizarValor: PropTypes.func,
  label: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.any,
  required: PropTypes.any,
  valor: PropTypes.any,
  valorNombre: PropTypes.any
}


export default InputTexto;
