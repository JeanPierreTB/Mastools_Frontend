import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled";
import "./Login.css";
import { useEffect, useState } from "react";
import { Iniciar_sesion } from "../../services/Iniciar_sesion";

const Login=()=>{

    const navigate=useNavigate();
    const [correo,setcorreo]=useState('');
    const [contrasena,setcontrasena]=useState('');



    const handleclik_ingreso=async()=>{

        const inicio=await Iniciar_sesion(correo,contrasena);

        if(!inicio.res) return alert(inicio.mensaje)

        localStorage.setItem("id_usuario",inicio.usuario.id)
        return navigate('/principal')
    }

    return (
        <div className="container-login">
            <h1><strong>Mast'l Tools</strong></h1>
            <div className="container-textfield-login">
                 <Textfield texto="Usuario o correo" inputValue={correo} onChange={(e)=>setcorreo(e.target.value)}/>
                <Textfield texto="Contraseña" inputValue={contrasena} onChange={(e)=>setcontrasena(e.target.value)}/>
            </div>
            <p style={{cursor:'pointer'}} onClick={()=>navigate('/cambio')}>Olvide mi contraseña</p>
            <div className="container-botones-login">
                <button style={{cursor:'pointer'}} onClick={()=>navigate('/registro')}>Registrate</button>
                <button style={{cursor:'pointer'}} onClick={()=>handleclik_ingreso()}>Ingresar</button>
            </div>
        </div>
    )
}

export default Login;