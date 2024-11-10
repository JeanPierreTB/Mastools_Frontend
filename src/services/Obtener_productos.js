import { URL } from "./URL"

export async function Obtener_productos (proveedorID){
    return fetch(`${URL}/obtener-productos/${proveedorID}`)
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  