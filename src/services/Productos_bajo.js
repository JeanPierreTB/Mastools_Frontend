import { URL } from "./URL"

export async function Producto_bajo_servicie (proveedorID){
    return fetch(`${URL}/productos-bajostock/${proveedorID}`)
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  
