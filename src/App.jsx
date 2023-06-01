import { useState } from 'react'
import './App.css'
import Formulario from './componentes/Formulario/Formulario'
import Header from './componentes/Header/Header'
import MiOrg from './componentes/MiOrg/MiOrg'

function App() {
  let [show,setShow]= useState(true);
  let changeShow=()=>{
    setShow(!show)
  }
  return (
    <>
     <Header/>
     {show === true ? <Formulario/> : <div></div>}
     <MiOrg functionShow={changeShow}/>
    </>
  )
}

export default App
