import { URL } from "./URL"

export async function Solicitudes (proveedorID){
    return fetch(`${URL}/visualizar-solicitudes/${proveedorID}`)
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };