import './EquipoSelect.css'

const EquipoSelect=()=>{
    let equipoOptions=[
        `Programación`,
        `Front End`,
        `Data Science`,
        `Devops`,
        `UX y diseño`,
        `Móvil`,
        `Inovación y Gestión`
    ];
    return <select name="EquipoSelect" className='select__EquipoSelect' id="ID-EquipoSelect">
      {equipoOptions.map((equipo,index)=>(<option key={index} value={equipo}>{equipo}</option>))}
    </select>
}
export default EquipoSelect
