import { useNavigate } from "react-router-dom";
import CInventario from "../../components/Caja_Inventario/CInventario";
import Textfield from "../../components/Textfield/Textfiled";
import "./Inventario.css";
import { useEffect, useState } from "react";
import { Obtener_productos } from "../../services/Obtener_productos";

const Inventario = () => {
    const navigate = useNavigate();
    const [productos, setproductos] = useState([]);
    const [nombre, setnombre] = useState('');
    const [filtro, setfiltro] = useState('Filtros');
    const [index, setIndex] = useState(0); 

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const id = localStorage.getItem('id_usuario');
        const response = await Obtener_productos(id);
        setproductos(response.productos);
    };

    const productosFiltrados = productos.filter(producto => {
        const coincideNombre = producto.descripcion.toLowerCase().includes(nombre.toLowerCase());
        const coincideFiltro = filtro === 'Filtros' || producto.tipo === filtro;
        return coincideNombre && coincideFiltro;
    });

    const productosPorPagina = 3;
    const productosPaginaActual = productosFiltrados.slice(index, index + productosPorPagina);

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - productosPorPagina); 
        }
    };

    const handleNext = () => {
        if (index + productosPorPagina < productosFiltrados.length) {
            setIndex(index + productosPorPagina);
        }
    };

    return (
        <div className="container-inventario">
            <div>
                <h2>Inventario</h2>
                <hr style={{ width: '70rem', border: '0.10rem solid black' }} />
            </div>
            
            <div className="container-filtros">
                <div className="barra">
                    <Textfield texto="Nombre del producto" inputValue={nombre} onChange={(e) => setnombre(e.target.value)} />
                    <select id="select" value={filtro} onChange={(e) => setfiltro(e.target.value)}>
                        <option value="Filtros">Filtros</option>
                        <option value="1">Heramienta</option>
                        <option value="2">Material</option>
                    </select>
                </div>
                <button style={{ cursor: 'pointer' }} onClick={() => navigate('/agregar-producto')}>Agregar productos</button>
            </div>

            

            <div className="container-inventario-des">
                <i
                className="fas fa-arrow-left"
                style={{ fontSize: '17px', cursor: 'pointer', marginRight: '10px' }}
                onClick={handlePrev}
            ></i>
                {productosPaginaActual.length === 0 ? (
                    <p>No existen productos</p>
                ) : (
                    productosPaginaActual.map((producto, i) => (
                        <CInventario
                            key={i}
                            producto={producto}
                            nombre={producto.descripcion}
                            imagen={producto.imagen}
                            cantidad={producto.cantidad}
                            precio={producto.precio}
                            categoria={producto.tipo}
                        />
                    ))
                )}
                <i
                className="fas fa-arrow-right"
                style={{ fontSize: '17px', cursor: 'pointer' }}
                onClick={handleNext}
            ></i>
            </div>

           
            
        </div>
    );
};

export default Inventario;
