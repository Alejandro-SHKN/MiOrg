import EquipoSelect from '../EquipoSelect/EquipoSelect'
import InputTexto from '../InputTexto/InputTexto'
import './Formulario.css'

const Formulario=()=>{
    // const handleClick=(e)=>{
    //     e.preventDefault()
    //     console.log(`Se presionó el botón`);
    // }
    return <div className='div__ContainerFormRoot'>
        <form className='div__InternoForm'>
            <h2 className='h2__Form'>Rellena el formulario para crear el colaborador</h2>
            <InputTexto label={`Nombre`} name={`nombre`} placeholder={`nombre`} />
            <InputTexto label={`Puesto`} name={`puesto`} placeholder={`puesto`}/>
            <InputTexto label={`Foto`} name={`foto`} placeholder={`foto`}/>
            <EquipoSelect name={`equipo`} Name={`Equipo`}/>
            <button type='submit' className='button__Crear' >Crear</button>
        </form>
    </div>
}
export default Formulario
