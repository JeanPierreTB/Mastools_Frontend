import { useNavigate } from "react-router-dom";
import {useState,useRef, useEffect } from "react";
import Textfield from "../../components/Textfield/Textfiled";
import "./Solicitudes.css";
import { Lista_proveedores } from "../../services/Lista_proveedores";
import { Realizar_solicitud } from "../../services/Realizar-solicitud";


const SolicitudesP = () => {
  const navigate = useNavigate();
  const [solicitud, setsolicitud] = useState({
    descripcion: '',
    fecha_solicitud:'',
    fecha_envio:'',
    imagen: null, 
    cantidad:0
  });  

  const [proveedores,setproveedores]=useState([]);
  const [seleccionado,setseleccioando]=useState();
  const fileInputRef = useRef(null); 



  useEffect(()=>{
    obtenerproveedores();
  },[])


  const obtenerproveedores=async()=>{
    const proveedoreslista=await Lista_proveedores();
    console.log(proveedoreslista);
    setproveedores(proveedoreslista.proveedores);
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setsolicitud(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setsolicitud(prevData => ({
          ...prevData,
          imagen: reader.result 
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleclik = async () => {
    const fechaSolicitud = new Date(solicitud.fecha_solicitud);
    const fechaEnvio = new Date(solicitud.fecha_envio);
  
    if (fechaEnvio < fechaSolicitud) {
      return alert("La fecha de envio debe ser mayor a la solicitud");
    }
  
    if (seleccionado === "Selecciona el Proveedor") {
      return alert("Selecciona un proveedor");
    }

    if(solicitud.imagen===null){
        return alert("Pon una imagen")
    }   

    
  
    const id = localStorage.getItem("id_usuario");
    const response = await Realizar_solicitud(solicitud, id, seleccionado);
    alert(response.mensaje);
    setsolicitud({
        descripcion: '',
        fecha_solicitud:'',
        fecha_envio:'',
        imagen: null, 
        cantidad:0
      });
    
  };
  
  return (
    <div className="container-eproducto">
      <h2><strong>Solicitudes</strong></h2>
      <hr style={{width:'70rem'}}/>
      <p><strong>Solicitudes al proveedor</strong></p>

      <div className="container-eproducto-informacion">
        <div className="container-nombre-producto">
          <div className="container-imagen-producto">
            <img
              id="imagen"
              src={solicitud.imagen ||"https://cdn-icons-png.flaticon.com/512/1170/1170628.png"}
              alt={"Imagen default"}
              onClick={() => fileInputRef.current.click()} 
            />
            <input 
            type="file" 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
            onChange={handleFileChange} 
          />
            <Textfield texto="Cantidad" numero={true} inputValue={solicitud.cantidad} name="cantidad" onChange={handleInputChange}  />
          </div>

          <div className="container-producto-info">
            <Textfield texto="Descripcion" inputValue={solicitud.descripcion} name="descripcion" onChange={handleInputChange} />
            <Textfield texto="Fecha de solicitud"  date={true} inputValue={solicitud.fecha_solicitud} name="fecha_solicitud" onChange={handleInputChange}/>
            <Textfield texto="Fecha de envio"  date={true} inputValue={solicitud.fecha_envio} name="fecha_envio" onChange={handleInputChange}/>
            <select className="select-estilo" value={seleccionado} onChange={(e)=>setseleccioando(e.target.value)}>
                <option>Selecciona el Proveedor</option>
                {proveedores.map(proveedor => (
                    <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>  
                ))}
            </select>



          </div>
        </div>

        <div className="container-eproducto-botones">
          <button className="botones" onClick={()=>handleclik()}>Solicitar</button>
        </div>
      </div>
    </div>
  );
}

export default SolicitudesP;
