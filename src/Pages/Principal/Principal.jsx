import CPrincipal from "../../components/Caja_Principal/CPrincipal";
import "./Principal.css";
import { Producto_Estadisticas } from "../../services/Productos_Estadisticas";
import { useEffect, useState } from "react";
import { Producto_bajo_servicie } from "../../services/Productos_bajo";
import { Solicitudes } from "../../services/Solicitudes";

const Principal = () => {

  const [Productos_so, setProducto_so] = useState([]);
  const [Productos_bajo, setProducto_bajo] = useState([]);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem('id_usuario');
      const productos_solicitados = await Producto_Estadisticas(id);
      const productos_bajo_stock = await Producto_bajo_servicie(id);

      setProducto_so(productos_solicitados.resultado);
      setProducto_bajo(productos_bajo_stock.productos);
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (index < Productos_bajo.length - 2) {
      setIndex(index + 1);
    }
  };

  const handleprev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext2 = () => {
    if (index2 < Productos_so.length - 2) {
      setIndex2(index2 + 1);
    }
  };

  const handleprev2 = () => {
    if (index2 > 0) {
      setIndex2(index2 - 1);
    }
  };

  return (
    <div className="container-principal">
      <div>
        <p><strong>Productos de bajo stock</strong></p>
        <div className="container-producto-stock">
          <i
            className="fas fa-arrow-left"
            style={{ fontSize: '17px', cursor: 'pointer', marginRight: '10px' }}
            onClick={handleprev}
          ></i>
          {Productos_bajo.slice(index, index + 2).map((producto, i) => (
            <CPrincipal
              key={i}
              nombre={producto.descripcion}  
              cantidad={producto.cantidad}    
              img={producto.imagen}           
            />
          ))}
          <i
            className="fas fa-arrow-right"
            style={{ fontSize: '17px', cursor: 'pointer' }}
            onClick={handleNext}
          ></i>
        </div>

        <p><strong>Productos más solicitados</strong></p>
        <div className="container-producto-stock">
          <i
            className="fas fa-arrow-left"
            style={{ fontSize: '17px', cursor: 'pointer', marginRight: '10px' }}
            onClick={handleprev2}
          ></i>
          {Productos_so.slice(index2, index2 + 2).map((producto, i) => (
            <CPrincipal
              key={i}
              nombre={producto.Producto.descripcion}  
              cantidad={producto.precio_total.toFixed(2)}        
              img={producto.Producto.imagen}          
            />
          ))}
          <i
            className="fas fa-arrow-right"
            style={{ fontSize: '17px', cursor: 'pointer' }}
            onClick={handleNext2}
          ></i>
        </div>
      </div>

      <div className="container-producto-stock-vertical">
        <p id="text"><strong>Solicitudes de clientes</strong></p>
        <div className="container-producto-solicitados">
          <i
            className="fas fa-arrow-up"
            style={{ fontSize: '17px', cursor: 'pointer', marginRight: '10px' }}
          ></i>

          <CPrincipal
            nombre="Producto 1"
            cantidad="10"
            img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"
          />
          <CPrincipal
            nombre="Producto 2"
            cantidad="20"
            img="https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/tipos-de-fierros-de-construccion.webp?fit=1000%2C706&ssl=1"
          />
          <i
            className="fas fa-arrow-down"
            style={{ fontSize: '17px', cursor: 'pointer' }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Principal;
