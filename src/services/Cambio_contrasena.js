import { URL } from "./URL"

export async function Cambio_contrasena(datos){
    return fetch(`${URL}/cambiar-contrasena`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            correo:datos.correo,
            contrasena:datos.contrasena
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };