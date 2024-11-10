import { useEffect, useState, useRef } from "react";
import Textfield from "../../components/Textfield/Textfiled";
import "./Perfil.css";
import { Datos_usuario } from "../../services/Datos_usuario";
import { Actualizacion_datos } from "../../services/Actualizacion_datos";

const Perfil = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    dni: '',
    foto: null // Asegúrate de tener la propiedad 'foto' en los datos
  });

  const fileInputRef = useRef(null); // Crear referencia para el input de archivo

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const id = localStorage.getItem('id_usuario');
    const datosInfo = await Datos_usuario(id);
    setDatos(datosInfo.usuario);
  };

  const handleclik = async () => {
    const id = localStorage.getItem('id_usuario');
    console.log(datos);
    const response = await Actualizacion_datos(datos, id);
    alert(response.mensaje);
    fetchData();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDatos(prevData => ({
          ...prevData,
          foto: reader.result // Guardamos la URL de la imagen
        }));
      };
      reader.readAsDataURL(file); // Leer el archivo como URL
    }
  };

  return (
    <div className="container-perfil">
      <h2><strong>Perfil</strong></h2>
      <hr style={{ width: '70rem', border: '0.10rem solid black' }} />
      <p><strong>Bienvenido, estimado Proveedor!</strong></p>
      <div className="container-perfil-datos">
        <div className="container-perfil-datos-foto">
          <img 
            src={datos.foto ? datos.foto : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
            alt="foto" 
            onClick={() => fileInputRef.current.click()} // Usamos ref para hacer clic en el input
          />
          <input 
            type="file" 
            ref={fileInputRef} // Asignamos la referencia al input
            style={{ display: 'none' }} // Hacemos el input invisible
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
    </div>
  );
};

export default Perfil;
