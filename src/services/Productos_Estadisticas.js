import { URL } from "./URL"

export async function Producto_Estadisticas (proveedorID){
    return fetch(`${URL}/productos-estadisticas/${proveedorID}`)
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  


  