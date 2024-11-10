import { useEffect, useState } from "react";
import Textfield from "../../components/Textfield/Textfiled";
import "./Perfil.css";
import { Datos_usuario } from "../../services/Datos_usuario";

const Perfil = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    dni: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem('id_usuario');
      const datosInfo = await Datos_usuario(id);
      setDatos(datosInfo.usuario);
    };

    fetchData();
  }, []);

  return (
    <div className="container-perfil">
      <h2><strong>Perfil</strong></h2>
      <hr style={{ width: '70rem', border: '0.10rem solid black' }} />
      <p><strong>Bienvenido, estimado Proveedor!</strong></p>
      <div className="container-perfil-datos">
        <div className="container-perfil-datos-foto">
          <img src="https://www.21-draw.com/wp-content/uploads/2022/06/character-archetype-the-hero.jpg" alt="foto" />
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
          <button className="boton">Actualizar</button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
