import { useState } from "react";
import EquipoSelect from "../EquipoSelect/EquipoSelect";
import InputTexto from "../InputTexto/InputTexto";
import "./Formulario.css";

const Formulario = () => {
  //↓f Previene el Envio por defecto ↓
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    let enviarDatos = {
      nombre,
      puesto,
      foto
    }
    console.log(enviarDatos);
  };
  //↓f useState de los valores internos de los inputs↓
  const [nombre,setNombre]=useState("");  
  const [puesto,setPuesto]=useState("");
  const [foto,setFoto]=useState("");  
  const [equipo,setEquipo]=useState("");

  return (
    <div className="div__ContainerFormRoot">
      <form id="ID-Form" onSubmit={handleSubmitForm} className="div__InternoForm">
        <h2 className="h2__Form">
          Rellena el formulario para crear el colaborador
        </h2>
        <InputTexto
          label={`Nombre`}
          name={`nombre`}
          placeholder={`nombre`}
          required
          actualizarValor={setNombre}
          valor={nombre}
        />
        <InputTexto label={`Puesto`} name={`puesto`} placeholder={`puesto`}
       required
       actualizarValor={setPuesto}
       valor={puesto}
       />
        <InputTexto label={`Foto`} name={`foto`} placeholder={`foto`} 
         required
         actualizarValor={setFoto}
         valor={foto}
         />
        <EquipoSelect name={`equipo`} Name={`Equipo`} 
        valor={equipo}
        actualizarValorEquipo={setEquipo}
        />
        <button type="submit" className="button__Crear">
          Crear
        </button>
      </form>
    </div>
  );
};
export default Formulario;
