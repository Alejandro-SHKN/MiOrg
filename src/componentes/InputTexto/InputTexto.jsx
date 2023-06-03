import './InputTexto.css'

const InputTexto =(props)=>{
    console.log("Renderizando el componente InputTexto con las props:", props)
    return <><label className='label__Form' htmlFor={props.label}>{props.label}</label>
     <input className='input__TextForm' type="text" name={props.name} id={`ID-${props.name}`} placeholder={`Ingresar ${props.placeholder}`} required/>
     </>
}
export default  InputTexto