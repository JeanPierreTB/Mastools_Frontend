import { URL } from "./URL"

export async function Datos_usuario (proveedorID){
    return fetch(`${URL}/obtener-datos/${proveedorID}`)
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  
