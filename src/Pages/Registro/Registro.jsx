import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled";
import "./Registro.css"
import { useState } from "react";
import { Registros } from "../../services/Registro";


const Registro= ()=>{
    const navigate=useNavigate();

    const [datos, setDatos] = useState({
        nombres:'',
        apellidos:'',
        nro:'',
        correo:'',
        contrasena:''
    });
    
    const [repetir,setrepetir]=useState('');

    const handleclik=async ()=>{

        if(repetir!==datos.contrasena) return alert("Contrasena no coinciden")
        
        const response=await Registros(datos);

        alert(response.mensaje)
        
        if(response.res) return navigate('/')
        
        
    }

    return(
        <div className="container-registro">
            <h1>Mast'l Tools</h1>
            <h2>Registro de usuario</h2>
            <div className="container-grupo-registro">
                <div className="container-inputs-registro">
                    <p><strong>Datos Personales</strong></p>
                    <Textfield texto="Nombres" inputValue={datos.nombres} onChange={(e)=>setDatos({...datos,nombres:e.target.value})}/>
                    <Textfield texto="Apellidos" inputValue={datos.apellidos} onChange={(e)=>setDatos({...datos,apellidos:e.target.value})}/>
                    <Textfield texto="Nro de DNI" inputValue={datos.nro} onChange={(e)=>setDatos({...datos,nro:e.target.value})}/>
                </div>

                <div className="container-inputs-registro">
                    <p><strong>Datos de la cuenta</strong></p>
                    <Textfield texto="Correo Electronico" inputValue={datos.correo} onChange={(e)=>setDatos({...datos,correo:e.target.value})}/>
                    <Textfield texto="Contraseña" inputValue={datos.contrasena} onChange={(e)=>setDatos({...datos,contrasena:e.target.value})}/>
                    <Textfield texto="Ingresar su contraseña nuevamente" inputValue={repetir} onChange={(e)=>setrepetir(e.target.value)}/>

                    
                </div>

                
            </div>

            <div className="container-botones-registro">
                    <button style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Regresar</button>
                    <button style={{cursor:'pointer'}} onClick={()=>handleclik()}>Registrate</button>
                </div>
            
        </div>
    )
}




export default Registro;