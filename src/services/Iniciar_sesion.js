import { URL } from "./URL"

export async function Iniciar_sesion(correo,contrasena){
    return fetch(`${URL}/iniciar-sesion`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            correo:correo,
            contrasena:contrasena
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  