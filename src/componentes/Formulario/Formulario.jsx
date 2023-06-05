// import { useState } from "react";
// import EquipoSelect from "../EquipoSelect/EquipoSelect";
// import InputTexto from "../InputTexto/InputTexto";
// import "./Formulario.css";

// const Formulario = () => {
//   //↓f Previene el Envio por defecto ↓
//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     console.log(e);
//   };
//   //↓f Actualizar los valores internos de los inputs↓
//   const [nombreValue, setNombre] = useState(``);
//   const [puestoValue, setPuesto] = useState(``);
//   const [fotoValue, setFoto] = useState(``);

//   const actualizarValor= (e) => {
//     setNombre(e.target.value);
//   };
//   return (
//     <div className="div__ContainerFormRoot">
//       <form onSubmit={handleSubmitForm} className="div__InternoForm">
//         <h2 className="h2__Form">
//           Rellena el formulario para crear el colaborador
//         </h2>
//         <InputTexto
//           label={`Nombre`}
//           name={`nombre`}
//           placeholder={`nombre`}
//           actualizarValor={setNombre}
//           valor={nombreValue}
//         />
//         <InputTexto label={`Puesto`} name={`puesto`} placeholder={`puesto`}
//         // actualizarValor={actualizarValorPuesto}
//         /*valor={puestoValue}*/ />
//         <InputTexto label={`Foto`} name={`foto`} placeholder={`foto`} />
//         <EquipoSelect name={`equipo`} Name={`Equipo`} />
//         <button type="submit" className="button__Crear">
//           Crear
//         </button>
//       </form>
//     </div>
//   );
// };
// export default Formulario;

import { useState } from "react";
import EquipoSelect from "../EquipoSelect/EquipoSelect";
import InputTexto from "../InputTexto/InputTexto";
import "./Formulario.css";

const Formulario = () => {
  //↓f Previene el Envio por defecto ↓
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    let datosAEnviar={
        nombre,
        puesto,
        foto
    }
    console.log(datosAEnviar);
    
  };
  //↓f Actualizar los valores internos de los inputs↓
  const [nombre,setNombre]=useState("");
  const [puesto,setPuesto]=useState("");
  const [foto,setFoto]=useState("");

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
          valorNombre={nombre}
          actualizarValor={setNombre}
          required
        />
        <InputTexto label={`Puesto`} name={`puesto`} placeholder={`puesto`}
       valorNombre={puesto}
       actualizarValor={setPuesto}
       required
       />
        <InputTexto label={`Foto`} name={`foto`} placeholder={`foto`} 
         valorNombre={foto}
         actualizarValor={setFoto}
         required
         />
        <EquipoSelect name={`equipo`} Name={`Equipo`} 
        />
        <button type="submit" className="button__Crear">
          Crear
        </button>
      </form>
    </div>
  );
};
export default Formulario;
