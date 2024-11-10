import { useNavigate } from "react-router-dom";
import { useEffect, useState,useRef } from "react";
import Textfield from "../../components/Textfield/Textfiled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./EProducto.css";
import { Actualizacion_producto } from "../../services/Actualizacion_producto";
import { Eliminar_productos } from "../../services/Eliminar_producto";

const EProducto = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: 0,
    tipo: '',
    imagen: null, 
  });  
  const fileInputRef = useRef(null); 

  useEffect(() => {
    const response = localStorage.getItem('producto');
    if (response) {
      setProducto(JSON.parse(response)); 
    }

  }, []);

  if (!producto) {
    return <div>Cargando...</div>; 
  }


  const handleclik=async()=>{
    const response=await Actualizacion_producto(producto);
    alert(response.mensaje);
    navigate('/inventario');
  }

  const handleclik2=async()=>{
    const response=await Eliminar_productos(producto.id);
    alert(response.mensaje);
    navigate('/inventario')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProducto(prevData => ({
          ...prevData,
          imagen: reader.result 
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container-eproducto">
      <h2><strong>Inventario--Previsualizacion</strong></h2>
      <hr style={{width:'70rem'}}/>
      <p><strong>Nombre del producto</strong></p>

      <div className="container-eproducto-informacion">
        <div className="container-nombre-producto">
          <div className="container-regresar">
            <FontAwesomeIcon onClick={() => navigate('/inventario')} icon={faArrowLeft} size="2x" />
          </div>
          <div className="container-imagen-producto">
            <img
              id="imagen"
              src={producto.imagen || "https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"}
              alt={producto.nombre}
              onClick={() => fileInputRef.current.click()} 
            />
            <input 
            type="file" 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
            onChange={handleFileChange} 
          />
            <Textfield texto="Cantidad" numero={true} inputValue={producto.cantidad} name="cantidad" onChange={handleInputChange}  />
          </div>

          <div className="container-producto-info">
            <Textfield texto="Descripcion" inputValue={producto.descripcion} name="descripcion" onChange={handleInputChange} />
            <Textfield texto="Precio de venta" inputValue={producto.precio} name="precio" onChange={handleInputChange}/>
            <Textfield texto="Tipo" inputValue={producto.tipo} name="tipo" onChange={handleInputChange}/>
          </div>
        </div>

        <div className="container-eproducto-botones">
          <button className="botones" onClick={()=>handleclik()}>Actualizar</button>
          <button className="botones" onClick={()=>handleclik2()}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default EProducto;
