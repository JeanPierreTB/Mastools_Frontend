import "./Barup.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Barup= ()=>{

    return (
        <div className="barup-container">
            <i className="fas fa-bars" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
            <p>Proveedor de Mast'l Tools</p>
            <div className="barup-iconos">
                <i className="fas fa-bell" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
                <i className="fas fa-user" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
            </div>
            
        </div>
    )
    
}


export default Barup;