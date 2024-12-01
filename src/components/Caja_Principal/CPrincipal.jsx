import "./Cprincipal.css";

const CPrincipal = ({ nombre, cantidad, img, onclick }) => {
  // Si no se pasa un `onclick`, se asigna una función vacía por defecto
  const handleClick = onclick || (() => {});

  return (
    <div className="container-cprincipal" onClick={handleClick}>
      <div>
        <p>{nombre}</p>
        <p>{cantidad}</p>
      </div>
      <img id="imagen" src={img} alt={nombre} />
    </div>
  );
};

export default CPrincipal;
