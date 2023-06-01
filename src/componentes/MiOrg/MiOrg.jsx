import './MiOrg.css'

const MiOrg=(props)=>{
    return <div className='div__containerMiOrgRoot'>
        <div className='div__containerElements'>
            <p className='p__MiOrg'>Mi organización</p>
            <img className='img__MiOrg' onClick={props.functionShow} src="https://i.postimg.cc/Xv5RdyGn/Bot-o-add-01-1-1.png" alt="imagen ORG" />
        </div>
    </div>
}
export default MiOrg