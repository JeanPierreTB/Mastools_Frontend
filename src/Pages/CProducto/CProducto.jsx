import { useEffect, useState, useRef } from "react";
import "./CProducto.css"
import Textfield from "../../components/Textfield/Textfiled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { Comprar_producto } from "../../services/Comprar_producto";

const CProducto = () => {
    const navigate = useNavigate();
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        cantidad: 0,
        precio: 0,
        tipo: '',
        imagen: null,
    });

    const [total,setotal]=useState(0);



    useEffect(() => {
        const response = localStorage.getItem('productoc');
        if (response) {
            setProducto(JSON.parse(response));
        }
    }, []);

    
    const handleclik=async ()=>{
       
        const datos=localStorage.getItem('id_usuario')
        const usuario = JSON.parse(datos);      
        const response=await Comprar_producto(parseInt(producto.id),parseInt(usuario),parseInt(total));
        alert(response.mensaje);
        navigate('/principal')


    }



    return (
        <div className="container-cproducto">
            <p><strong>Nombre del producto</strong></p>
            <div className="container-eproducto-informacion">
                <div className="container-nombre-producto">
                    <div className="container-regresar">
                        <FontAwesomeIcon onClick={() => navigate('/principal')} icon={faArrowLeft} size="2x" />
                    </div>
                    <div className="container-imagen-producto">
                        <img
                            id="imagen"
                            src={producto.imagen || "https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"}
                            alt={producto.nombre}
                            style={{ cursor: 'default' }} 
                        />
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            disabled 
                        />

                     <Textfield texto="Cantidad" numero={true} inputValue={total} onChange={(e)=>setotal(e.target.value)}/>

                    </div>

                    <div className="container-producto-info">
                        <Textfield
                            texto="Descripcion"
                            inputValue={producto.descripcion}
                            readOnly 
                        />
                        <Textfield
                            texto="Precio de venta"
                            inputValue={producto.precio}
                            readOnly 
                        />
                        <Textfield
                            texto="Tipo"
                            inputValue={producto.tipo}
                            readOnly 
                        />

                        <Textfield texto="Stock" numero={true} inputValue={producto.cantidad} readOnly />

                    </div>
                </div>

                <div className="container-eproducto-botones">
                    <button className="botones" onClick={() => handleclik()}>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default CProducto;
