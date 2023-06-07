import PropTypes from "prop-types"
import './Equipo.css'
const Equipo=(props)=>{
  // Se crea para mayor comodidad una destructuracion de props.datos (los datos del objeto)
  const{titulo,colorPrimario,colorSecundario}=props.datos

  //Aunado a la destructuración se crea una variable con los estilos simplificados (opcional)
  const colorFondoSecundario = {backgroundColor:`${colorSecundario}`};
  const colorBordePrimario= {borderColor:`${colorPrimario}`};

  // El backgroundColor al div principal se aplicó en base a sus props
  return <div className="div__Principal" style={colorFondoSecundario} >

    {/* El Color del borde del h2 se aplica en base a props */}
    <h2 className='h2__Titulo' style={colorBordePrimario}>{titulo}</h2>
    <div className='div__contenedorTarjetas'>
      
    </div>
  </div>
}

Equipo.propTypes = {
  datos: PropTypes.shape({
    colorPrimario: PropTypes.any,
    colorSecundario: PropTypes.any,
    titulo: PropTypes.any
  })
}
export default Equipo