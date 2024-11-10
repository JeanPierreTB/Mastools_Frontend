import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled";
import "./Registro.css"


const Registro= ()=>{
    const navigate=useNavigate();

    return(
        <div className="container-registro">
            <h1>Mast'l Tools</h1>
            <h2>Registro de usuario</h2>
            <div className="container-grupo-registro">
                <div className="container-inputs-registro">
                    <p><strong>Datos Personales</strong></p>
                    <Textfield texto="Nombres"/>
                    <Textfield texto="Apellidos"/>
                    <Textfield texto="Nro de DNI"/>
                </div>

                <div className="container-inputs-registro">
                    <p><strong>Datos de la cuenta</strong></p>
                    <Textfield texto="Correo Electronico"/>
                    <Textfield texto="Contraseña"/>
                    <Textfield texto="Ingresar su contraseña nuevamente"/>

                    
                </div>

                
            </div>

            <div className="container-botones-registro">
                    <button style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Regresar</button>
                    <button style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Registrate</button>
                </div>
            
        </div>
    )
}




export default Registro;