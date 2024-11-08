import "./CInventario.css"

const CInventario =({nombre,imagen,cantidad,precio_venta,precio_compra})=>{
    return (
        <div className="container-cinventario">
            <p>{nombre}</p>
            <img src={imagen} alt={nombre}></img>
            <p><strong>Cantidad:</strong>{cantidad}</p>
            <p><strong>Precio de venta:</strong>{precio_venta}</p>
            <p><strong>Precio de comora:</strong>{precio_compra}</p>
            <button>Editar</button>
        </div>
    )
}

export default CInventario;