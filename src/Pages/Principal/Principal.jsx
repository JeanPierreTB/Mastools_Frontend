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
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0); 
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

  const handleNext3 = () => {  
    if (index3 < Solicitudes_vencer.length - 2) {
      setIndex3(index3 + 1);
    }
  };

  const handleprev3 = () => { 
    if (index3 > 0) {
      setIndex3(index3 - 1);
    }
  };

  const handleclik=(producto)=>{
    localStorage.setItem('productoc',JSON.stringify(producto));
    navigate('/cproducto')
  }

  return (
    <div className="container-principal">
      {rol === "0" ? (
        <>
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
          onClick={handleprev3}  
        ></i>

        {Solicitudes_vencer.slice(index3, index3 + 2).map((solicitud, i) => (
          <CPrincipal
            key={i}
            nombre={solicitud.descripcion}  
            cantidad={solicitud.cantidad}    
            img={solicitud.imagen}           
          />
        ))}
        <i
          className="fas fa-arrow-down"
          style={{ fontSize: '17px', cursor: 'pointer' }}
          onClick={handleNext3}  
        ></i>
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
                onclick={()=>handleclik(producto)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Principal;
