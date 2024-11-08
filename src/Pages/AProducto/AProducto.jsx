import "./AProducto.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled"


const AProducto= ()=>{
    const navigate=useNavigate();

    return (
        <div className="container-aproducto">
            <h2><strong>Agregar Producto</strong></h2>
            <hr style={{width:'70rem'}}/>

            <div className="container-eproducto-informacion">
                <div className="container-nombre-producto">
                    <div className="container-regresar">
                        <FontAwesomeIcon onClick={()=>navigate('/inventario')} icon={faArrowLeft} size="2x" />
                    </div>
                    <div className="container-imagen-producto">
                        <img id="imagen" src="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1" alt="Fierros"></img>
                        <Textfield texto="Cantidad" numero={true}/>
                    </div>

                    <div className="container-producto-info">
                        <Textfield texto="Descripcion"/>
                        <Textfield texto="Precio de venta"/>
                        <Textfield texto="Precio de compra"/>
                        <Textfield texto="Proveedor"/>
                    </div>
                    
                </div>
                
                <button style={{cursor:'pointer'}} className="botones">Agregar</button>
                    
                
            </div>
        </div>
    )
}


export default AProducto;