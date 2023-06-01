import EquipoSelect from '../EquipoSelect/EquipoSelect'
import './Formulario.css'

const Formulario=()=>{
    return <div className='div__ContainerFormRoot'>
        <div className='div__InternoForm'>
            <h2 className='h2__Form'>Rellena el formulario para crear el colaborador</h2>

            <label className='label__Form' htmlFor="nombre">Nombre</label>
            <input className='input__TextForm' placeholder='Ingresar nombre' type="text" name="nombre" id="ID-Nombre" />
            <label className='label__Form' htmlFor="puesto">Puesto</label>
            <input className='input__TextForm' placeholder='Ingresar puesto' type="text" name="puesto" id="ID-Puesto" />
            <label className='label__Form' htmlFor="foto">Foto</label>
            <input className='input__TextForm' placeholder='Ingresar enlace de foto' type="text" name="foto" id="ID-Foto" />
            <label className='label__Form' htmlFor="equipo">Equipo</label>
            <EquipoSelect/>
            <button className='button__Crear'>Crear</button>
        </div>
    </div>
}
export default Formulario