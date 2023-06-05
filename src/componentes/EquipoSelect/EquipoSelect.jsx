import './EquipoSelect.css'

const EquipoSelect=(props)=>{
    let equipoOptions=[
        `Programación`,
        `Front End`,
        `Data Science`,
        `Devops`,
        `UX y diseño`,
        `Móvil`,
        `Inovación y Gestión`
    ];
    return <> <label className='label__Form' htmlFor={props.name}>{props.Name}</label>
    <select name="EquipoSelect" className='select__EquipoSelect' id="ID-EquipoSelect">
    {equipoOptions.map((equipo,index)=>(<option key={index} value={equipo}>{equipo}</option>))}
    </select>
    </>
}
export default EquipoSelect
