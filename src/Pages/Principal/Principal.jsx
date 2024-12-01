import React, { useEffect, useState } from "react";
import CPrincipal from "../../components/Caja_Principal/CPrincipal";
import "./Principal.css";
import { Producto_Estadisticas } from "../../services/Productos_Estadisticas";
import { Producto_bajo_servicie } from "../../services/Productos_bajo";
import { Solicitudes } from "../../services/Solicitudes";
import { Obtener_productos_disponibles } from "../../services/Obtener-productos-disponibles";
import { useNavigate } from "react-router-dom";

const Principal = () => {
  const navigate=useNavigate();
  const [Productos_so, setProducto_so] = useState([]);
  const [Productos_bajo, setProducto_bajo] = useState([]);
  const [Solicitudes_vencer, setSolicitudes_vencer] = useState([]);
  const [Productos_dis, setProducto_dis] = useState([]);
  const [indexAdmin, setIndexAdmin] = useState(0);
  const [rol, setRol] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productosPorPagina = 6;

  useEffect(() => {
    const roldata = localStorage.getItem("rol");
    setRol(roldata);

    if (roldata === "0") fetchData();
    else if (roldata === "1") fetchData2();
  }, []);

  const fetchData = async () => {
    const id = localStorage.getItem("id_usuario");
    const productos_solicitados = await Producto_Estadisticas(id);
    const productos_bajo_stock = await Producto_bajo_servicie(id);
    const solicitudes_info = await Solicitudes(id);

    setProducto_so(productos_solicitados.resultado);
    setProducto_bajo(productos_bajo_stock.productos);
    setSolicitudes_vencer(solicitudes_info.solicitud);
  };

  const fetchData2 = async () => {
    const productosDisponible = await Obtener_productos_disponibles();
    setProducto_dis(productosDisponible.productos);
    setFilteredProducts(productosDisponible.productos); 
  };

  const handleNextAdmin = () => {
    if (indexAdmin + productosPorPagina < filteredProducts.length) {
      setIndexAdmin(indexAdmin + productosPorPagina);
    }
  };

  const handlePrevAdmin = () => {
    if (indexAdmin - productosPorPagina >= 0) {
      setIndexAdmin(indexAdmin - productosPorPagina);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = Productos_dis.filter((producto) =>
      producto.descripcion.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
    setIndexAdmin(0); 
  };

  return (
    <div className="container-principal">
      {rol === "0" ? (
        <>
          <div>
            <p><strong>Productos de bajo stock</strong></p>
            <div className="container-producto-stock">
              {Productos_bajo.slice(0, 2).map((producto, i) => (
                <CPrincipal
                  key={i}
                  nombre={producto.descripcion}
                  cantidad={producto.cantidad}
                  img={producto.imagen}
                />
              ))}
            </div>

            <p><strong>Productos más solicitados</strong></p>
            <div className="container-producto-stock">
              {Productos_so.slice(0, 2).map((producto, i) => (
                <CPrincipal
                  key={i}
                  nombre={producto.Producto.descripcion}
                  cantidad={producto.precio_total.toFixed(2)}
                  img={producto.Producto.imagen}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="admin-productos-disponibles">
         

          <div className="navigation-buttons">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          <div className="anterior-siguiente">
          <button onClick={handlePrevAdmin} disabled={indexAdmin === 0}>
              Anterior
            </button>
            <button
              onClick={handleNextAdmin}
              disabled={indexAdmin + productosPorPagina >= filteredProducts.length}
            >
              Siguiente
            </button>
          </div>
            
          </div>

          <div className="productos-grid">
            {filteredProducts.slice(indexAdmin, indexAdmin + productosPorPagina).map((producto) => (
              <CPrincipal
                key={producto.id}
                nombre={producto.descripcion}
                cantidad={producto.precio}
                img={producto.imagen}
                onclick={()=>navigate('/cproducto')}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Principal;
