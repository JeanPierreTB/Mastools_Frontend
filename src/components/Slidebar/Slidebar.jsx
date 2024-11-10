import { useNavigate } from "react-router-dom";
import "./Slidebar.css";

const Slidebar= ()=>{

    const navigate=useNavigate();

    return(
        <div className="slidebar-container">
            <div>
                <p className="barra" onClick={()=>navigate('/principal')}>Inicio</p>
                <p className="barra" onClick={()=>navigate('/perfil')}>Perfil</p>
                <p className="barra" onClick={()=>navigate('/inventario')}>Inventario</p>
                <p className="barra" >Analitica</p>
            </div>

            <p className="barra" onClick={()=>navigate('/')}>Cerrar sesion</p>
            

        </div>
    )
}


export default Slidebar