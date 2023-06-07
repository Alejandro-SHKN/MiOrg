import { useState } from 'react'
import './App.css'
import Formulario from './componentes/Formulario/Formulario'
import Header from './componentes/Header/Header'
import MiOrg from './componentes/MiOrg/MiOrg'
import Equipo from './componentes/Equipo/Equipo'

function App() {
  let [show,setShow]= useState(true);
  let changeShow=()=>{
    setShow(!show)

  }
  //Lista de Equipos
  let equipoDatos = [
    {titulo:`Programación`,
     colorPrimario:`#57C278`,
     colorSecundario:`#D9F7E9` 
  },
  {titulo:`Front End`,
   colorPrimario:`#82CFFA`,
   colorSecundario:`#E8F8FF` 
  },
  {titulo:`Data Science`,
   colorPrimario:`#A6D157`,
   colorSecundario:`#F0F8E2` 
  },
  {titulo:`Devops`,
   colorPrimario:`#E06B69`,
   colorSecundario:`#FDE7E8` 
  },
  {titulo:`UX y diseño`,
   colorPrimario:`#DB6EBF`,
   colorSecundario:`#FAE9F5` 
  },
  {titulo:`Móvil`,
   colorPrimario:`#FFBA05`,
   colorSecundario:`#FFF5D9` 
  },
  {titulo:`Inovación y Gestión`,
   colorPrimario:`#FF8A29`,
   colorSecundario:`#FFEEDF` 
  }
  ];
  return (
    <>
     <Header/>
     {/* {show ? <Formulario/> : <></>} */}
     {show && <Formulario/>}
     <MiOrg functionShow={changeShow} />
     {/* Se creo la lista de equipos en base a un array de objetos (equipoDatos) */}
    {equipoDatos.map((equipo,index)=>(<Equipo key={index} datos={equipo}/>))}
    </>
  )
}

export default App
