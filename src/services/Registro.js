import { URL } from "./URL"

export async function Registros(datos){
    return fetch(`${URL}/insertar-proveedor`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            nombre:datos.nombres,
            apellido:datos.apellidos,
            correo:datos.correo,
            contrasena:datos.contrasena,
            dni:datos.nro
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  