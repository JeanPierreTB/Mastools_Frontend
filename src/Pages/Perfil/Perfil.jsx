import { useEffect, useState, useRef } from "react";
import Textfield from "../../components/Textfield/Textfiled";
import "./Perfil.css";
import { Datos_usuario } from "../../services/Datos_usuario";
import { Datos_administrador } from "../../services/Datos_administrador";
import { Actualizacion_datos } from "../../services/Actualizacion_datos";
import { Actualizacion_administrador } from "../../services/Actualizacion_administrador";


const Perfil = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    dni: '',
    foto: null 
  });

  const [rol,setrol]=useState(null);

  const fileInputRef = useRef(null); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    const roldata = localStorage.getItem('rol');
    setrol(roldata);

    if (roldata === "0") fetchData();
    else if (roldata === "1") fetchData2();
  
    return () => {

    };
  }, []);

  const fetchData = async () => {
    const id = localStorage.getItem('id_usuario');
    const datosInfo = await Datos_usuario(id);
    setDatos(datosInfo.usuario);
  };

  const fetchData2 = async () => {
    const id = localStorage.getItem('id_usuario');
    const datosInfo = await Datos_administrador(id);
    setDatos(datosInfo.usuario);
  };

  const handleclik = async () => {
    const roldata = localStorage.getItem('rol');
    setrol(roldata);
    const id = localStorage.getItem('id_usuario');
    if (roldata === "0") {
      const response = await Actualizacion_datos(datos, id);
      alert(response.mensaje);
      fetchData();
    } else {
      const response = await Actualizacion_administrador(datos, id);
      alert(response.mensaje);
      fetchData2();
    }
    
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDatos(prevData => ({
          ...prevData,
          foto: reader.result 
        }));
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    
      <div className="container-perfil">
        {rol==="0" ? (
        <>
        <h2><strong>Perfil</strong></h2>
        <hr style={{ width: '70rem', border: '0.10rem solid black' }} />
        <p><strong>Bienvenido, estimado Proveedor {datos.nombre}!</strong></p>
        <div className="container-perfil-datos">
          <div className="container-perfil-datos-foto">
            <img 
              src={datos.foto ? datos.foto : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
              alt="foto" 
              onClick={() => fileInputRef.current.click()} 
            />
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
            />
            <Textfield
              texto="Nombre"
              inputValue={datos.nombre}
              name="nombre"
              onChange={handleInputChange}
            />
          </div>

          <div className="container-perfil-datos-info">
            <Textfield
              texto="Apellido"
              inputValue={datos.apellido}
              name="apellido"
              onChange={handleInputChange}
            />
            <Textfield
              texto="Correo"
              inputValue={datos.correo}
              name="correo"
              onChange={handleInputChange}
            />
            <Textfield
              texto="Contrasena"
              inputValue={datos.contrasena}
              name="contrasena"
              onChange={handleInputChange}
            />
            <Textfield
              texto="Dni"
              inputValue={datos.dni}
              name="dni"
              onChange={handleInputChange}
            />
            <button onClick={() => handleclik()} className="boton">Actualizar</button>
          </div>
        </div>

          </>
        ):(
          <>
            <h2><strong>Perfil</strong></h2>
        <hr style={{ width: '70rem', border: '0.10rem solid black' }} />
        <p><strong>Bienvenido, estimado Adminitrador {datos.nombre}!</strong></p>
        <div className="container-perfil-datos">
          <div className="container-perfil-datos-foto">
            <img 
              src={datos.foto ? datos.foto : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
              alt="foto" 
              onClick={() => fileInputRef.current.click()} 
            />
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
            />
            <Textfield
              texto="Nombre"
              inputValue={datos.nombre}
              name="nombre"
              onChange={handleInputChange}
            />
          </div>

          <div className="container-perfil-datos-info">
            <Textfield
              texto="Apellido"
              inputValue={datos.apellido}
              name="apellido"
              onChange={handleInputChange}
            />
            <Textfield
              texto="Correo"
              inputValue={datos.correo}
              name="correo"
              onChange={handleInputChange}
            />
            <Textfield
              texto="Contrasena"
              inputValue={datos.contrasena}
              name="contrasena"
              onChange={handleInputChange}
            />
            <Textfield
              texto="Dni"
              inputValue={datos.dni}
              name="dni"
              onChange={handleInputChange}
            />
            <button onClick={() => handleclik()} className="boton">Actualizar</button>
          </div>
        </div>
          </>
        )}

      </div>
  );
};

export default Perfil;
