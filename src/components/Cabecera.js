import React from "react";

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)
const Cabecera = (props) => {
  return (
    <header>
      <h1>Listado de productos</h1>
      <p>
        Cantidad de Productos:
        <span>{props.cantidad}</span>
      </p>
    </header>
  );
};

export default Cabecera;
