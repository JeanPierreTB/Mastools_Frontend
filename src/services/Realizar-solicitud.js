import { URL } from "./URL"

export async function Realizar_solicitud(datos,AdministradorId,ProveedorId){
    return fetch(`${URL}/realizar-solicitud`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({
            descripcion:datos.descripcion,
            fecha_solicitud:datos.fecha_solicitud,
            fecha_envio:datos.fecha_envio,
            imagen:datos.imagen,
            cantidad:datos.cantidad,
            AdministradorId:AdministradorId,
            ProveedorId:ProveedorId
        })
    })
      .then((response) => response.json()) 
      .then((data) => data)
      .catch((e) => {console.error(`Ocurrió un error: ${e}`)});
  };
  