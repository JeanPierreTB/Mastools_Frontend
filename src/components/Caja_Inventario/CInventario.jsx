import { useNavigate } from "react-router-dom";
import "./CInventario.css"

const CInventario =({nombre,imagen,cantidad,precio,categoria,producto})=>{
    const navigate=useNavigate();

    const categorias = {
        1: 'Herramienta',
        2: 'Material',
    };

    const categoriaNombre = categorias[categoria] || 'categoría desconocida';


    const handleclik=async ()=>{
       localStorage.setItem("producto",JSON.stringify(producto))
       navigate('/eproducto')
    }
    
    return (
        <div className="container-cinventario">
            <p>{nombre}</p>
            <img src={imagen} alt={nombre}></img>
            <p><strong>Cantidad:</strong>{cantidad}</p>
            <p><strong>Precio de venta:</strong>{precio}</p>
            <p><strong>Categoria:</strong>{categoriaNombre}</p>
            <button style={{cursor:'pointer',padding:'0.50rem'}} onClick={()=>handleclik()}>Editar</button>
        </div>
    )
}

export default CInventario;