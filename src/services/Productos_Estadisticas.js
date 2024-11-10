import { URL } from "./URL"

export async function Producto_Estadisticas (proveedorID, order = 1){
    return fetch(`${URL}/productos-estadisticas/${proveedorID}/${order}`)
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  


  