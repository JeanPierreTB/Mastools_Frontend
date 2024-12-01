import { useNavigate } from "react-router-dom";
import "./Slidebar.css";
import { useEffect, useState } from "react";

const Slidebar= ()=>{

    const navigate=useNavigate();
    const [rol,setrol]=useState();

    useEffect(()=>{
        const data=localStorage.getItem('rol');
        console.log(data);
        setrol(data);
    },[])

    return(
        <div className="slidebar-container">
            <div>
                <p className="barra" onClick={()=>navigate('/principal')}>Inicio</p>
                <p className="barra" onClick={()=>navigate('/perfil')}>Perfil</p>
                {rol==='0'? (
                    <p className="barra" onClick={()=>navigate('/inventario')}>Inventario</p>
                ):(
                    <p className="barra" onClick={()=>navigate('/solicitudes')}>Solicitudes</p>
                )}
                
            </div>

            <p className="barra" onClick={()=>navigate('/')}>Cerrar sesion</p>
            

        </div>
    )
}


export default Slidebar