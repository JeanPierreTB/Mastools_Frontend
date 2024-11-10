
import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled";
import "./CContrasena.css"

const CContrasena= ()=>{
    const navigate=useNavigate();
    return(
        <div className="container-ccontrasena">
            <h1>Mast'l Tools</h1>
            <h2>Olvide mi contraseña</h2>
            <div className="container-textfield-ccontrasena">
                <Textfield texto="Usuario o correo electronico"/>
                <Textfield texto="Nueva contraseña"/>
            </div>

            <div className="container-botones-ccontrasena">
                <button style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Regresar</button>
                <button style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Cambiar</button>
            </div>

        </div>
    )
}

export default CContrasena;