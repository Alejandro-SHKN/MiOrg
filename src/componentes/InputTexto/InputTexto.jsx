// import PropTypes from "prop-types"
// import "./InputTexto.css";

// const InputTexto = (props) => {
//   const handleChange= (e) => {
//     props.actualizarValor(e.target.value);
//   };
//   return (
//     <>
//       <label className="label__Form" htmlFor={props.label}>
//         {props.label}
//       </label>
//       <input autoComplete="off"
//         className="input__TextForm"
//         type="text"
//         name={props.name}
//         id={`ID-${props.name}`}
//         placeholder={`Ingresar ${props.placeholder}`}
//         required
//         onChange={handleChange}
//         value={props.valor}
//       />
//     </>
//   );
// };

// InputTexto.propTypes = {
//   actualizarValor: PropTypes.any,
//   label: PropTypes.any,
//   name: PropTypes.any,
//   placeholder: PropTypes.any,
//   valor: PropTypes.any
// }


// export default InputTexto;

import PropTypes from "prop-types"
import "./InputTexto.css";

const InputTexto = (props) => {
  //f actualizar el valor de los inputs con setValor
  const actualizarValor=(e)=>{
    props.actualizarValor(e.target.value)
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
        value={props.valorNombre}
        required={props.required}
        onChange={actualizarValor}
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
