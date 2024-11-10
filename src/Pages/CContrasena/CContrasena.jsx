
import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled";
import "./CContrasena.css"
import { useState } from "react";
import { Cambio_contrasena } from "../../services/Cambio_contrasena";

const CContrasena= ()=>{
    const navigate=useNavigate();
    const [datos,setDatos]=useState({
        correo:'',
        contrasena:''

    })

    const handleclik=async()=>{
        const response=await Cambio_contrasena(datos);
        alert(response.mensaje)

        if(response.res) return navigate('/')
        
    }

    
    return(
        <div className="container-ccontrasena">
            <h1>Mast'l Tools</h1>
            <h2>Olvide mi contraseña</h2>
            <div className="container-textfield-ccontrasena">
                <Textfield texto="Usuario o correo electronico" inputValue={datos.correo} onChange={(e)=>setDatos({...datos,correo:e.target.value})}/>
                <Textfield texto="Nueva contraseña" inputValue={datos.contrasena} onChange={(e)=>setDatos({...datos,contrasena:e.target.value})}/>
            </div>

            <div className="container-botones-ccontrasena">
                <button style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Regresar</button>
                <button style={{cursor:'pointer'}} onClick={()=>handleclik()}>Cambiar</button>
            </div>

        </div>
    )
}

export default CContrasena;