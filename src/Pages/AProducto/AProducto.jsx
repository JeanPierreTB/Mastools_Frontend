import "./AProducto.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Textfield/Textfiled";
import { Agregar_producto } from "../../services/Agregar_producto";
import { useState, useRef } from "react";

const AProducto = () => {
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

  const handleclik = async () => {
    const id = localStorage.getItem('id_usuario');
    const response = await Agregar_producto(producto, id);
    alert(response.mensaje);
    navigate('/inventario');
  };

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
    <div className="container-aproducto">
      <h2><strong>Agregar Producto</strong></h2>
      <hr style={{ width: '70rem' }} />

      <div className="container-eproducto-informacion">
        <div className="container-nombre-producto">
          <div className="container-regresar">
            <FontAwesomeIcon onClick={() => navigate('/inventario')} icon={faArrowLeft} size="2x" />
          </div>
          <div className="container-imagen-producto">
        
            <img
              id="imagen"
              src={producto.imagen || "https://cdn-icons-png.flaticon.com/512/1783/1783976.png"} 
              alt="Imagen del producto"
              onClick={() => fileInputRef.current.click()} 
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }} 
              onChange={handleFileChange}
            />
            <Textfield texto="Cantidad" name="cantidad" inputValue={producto.cantidad} numero={true} onChange={handleInputChange} />
          </div>

          <div className="container-producto-info">
            <Textfield texto="Descripcion" name="descripcion" inputValue={producto.descripcion} onChange={handleInputChange} />
            <Textfield texto="Precio de venta" name="precio" inputValue={producto.precio} onChange={handleInputChange} />
            <Textfield texto="Tipo" name="tipo" inputValue={producto.tipo} onChange={handleInputChange} />
          </div>

        </div>

        <button style={{ cursor: 'pointer' }} onClick={() => handleclik()} className="botones">Agregar</button>
      </div>
    </div>
  );
};

export default AProducto;
