import { URL } from "./URL"

export async function Lista_proveedores (proveedorID){
    return fetch(`${URL}/lista-proveedores`)
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  
