import { useNavigate } from "react-router-dom";
import "./CInventario.css"

const CInventario =({nombre,imagen,cantidad,precio_venta,precio_compra})=>{
    const navigate=useNavigate();

    return (
        <div className="container-cinventario">
            <p>{nombre}</p>
            <img src={imagen} alt={nombre}></img>
            <p><strong>Cantidad:</strong>{cantidad}</p>
            <p><strong>Precio de venta:</strong>{precio_venta}</p>
            <p><strong>Precio de comora:</strong>{precio_compra}</p>
            <button style={{cursor:'pointer',padding:'0.50rem'}} onClick={()=>navigate('/eproducto')}>Editar</button>
        </div>
    )
}

export default CInventario;