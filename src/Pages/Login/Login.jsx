import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled";
import "./Login.css";

const Login=()=>{

    const navigate=useNavigate();

    return (
        <div className="container-login">
            <h1><strong>Mast'l Tools</strong></h1>
            <div className="container-textfield-login">
                 <Textfield texto="Usuario o correo"/>
                <Textfield texto="Contraseña"/>
            </div>
            <p style={{cursor:'pointer'}} onClick={()=>navigate('/cambio')}>Olvide mi contraseña</p>
            <div className="container-botones-login">
                <button style={{cursor:'pointer'}} onClick={()=>navigate('/registro')}>Registrate</button>
                <button style={{cursor:'pointer'}} onClick={()=>navigate('/principal')}>Ingresar</button>
            </div>
        </div>
    )
}

export default Login;