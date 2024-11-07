import { useNavigate } from "react-router-dom";
import "./Slidebar.css";

const Slidebar= ()=>{

    const navigate=useNavigate();

    return(
        <div className="slidebar-container">
            <p className="barra" onClick={()=>navigate('/')}>Inicio</p>
            <p className="barra" onClick={()=>navigate('/perfil')}>Perfil</p>
            <p className="barra">Inventario</p>
            <p className="barra">Analitica</p>

        </div>
    )
}


export default Slidebar