import PropTypes from "prop-types";
import "./EquipoSelect.css";

const EquipoSelect = (props) => {
  const handleChange = (e) => {
    console.log(`Se hizo un cambio en el select`, e.target.value);
    props.actualizarValorEquipo(e.target.value);
  };
  let equipoOptions = [
    `Programación`,
    `Front End`,
    `Data Science`,
    `Devops`,
    `UX y diseño`,
    `Móvil`,
    `Inovación y Gestión`,
  ];
  return (
    <>
      <label className="label__Form" htmlFor={props.name}>
        {props.Name}
      </label>
      <select
        name="EquipoSelect"
        className="select__EquipoSelect"
        id="ID-EquipoSelect"
        value={props.valor}
        onChange={handleChange}
      >
        <option disabled value="" defaultValue={""}>
          Seleccionar Equipo
        </option>
        {equipoOptions.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </>
  );
};

EquipoSelect.propTypes = {
  Name: PropTypes.any,
  actualizarValorEquipo: PropTypes.func,
  name: PropTypes.any,
  valor: PropTypes.any,
};
export default EquipoSelect;
