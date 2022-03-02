import React, { useContext } from "react";
import Bienvenida from "../componentes/Bienvenida";
import EjeciciosLista from "../componentes/EjerciciosLista";
import BotonAgregar from "../componentes/BotonAgregar";
import { EjerciciosContext } from "../componentes/App";
import MiModal from "../componentes/MiModal";
import "../componentes/estilos/Tarjeta.css";

function Ejecicios() {
  const { ejercicios } = useContext(EjerciciosContext);

  return (
    <div className="container">
      <Bienvenida usuario="Victor" />
      <BotonAgregar />
      <EjeciciosLista ejercicios={ejercicios} />
      <MiModal />
    </div>
  );
}

export default Ejecicios;
