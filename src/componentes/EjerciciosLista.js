import React from "react";
import Tarjeta from "../componentes/Tarjeta";
function EjeciciosLista({ ejercicios }) {
  return (
    <div className="container">
      <div className="row">
        {[...ejercicios].reverse().map((ejercicio, index) => {
          return (
            <div className="col-12 col-lg-6" key={index}>
              <Tarjeta
                key={ejercicio.id}
                id={ejercicio.id}
                titulo={ejercicio.titulo}
                descripcion={ejercicio.descripcion}
                imagen={ejercicio.imagen}
                colorIzquierda={ejercicio.colorIzquierda}
                colorDerecha={ejercicio.colorDerecha}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EjeciciosLista;
