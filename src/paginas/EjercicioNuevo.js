import React, { useState, useContext, useEffect } from "react";
import EjeciciosFormulario from "../componentes/EjerciciosFormulario";
import Tarjeta from "../componentes/Tarjeta";
import { EjerciciosContext } from "../componentes/App";
import { useNavigate, useSearchParams } from "react-router-dom";

function EjecicioNuevo() {
  const { ejercicios, setEjercicios, ejercicioSeleccionado } =
    useContext(EjerciciosContext);
  const popeye = useNavigate();
  const [parametrosDeBusqueda] = useSearchParams();

  const modoEdicion = parametrosDeBusqueda.get("modoEdicion");

  const [estado, setEstado] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    colorIzquierda: "",
    colorDerecha: "",
    id: "",
  });

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    const nuevoValor = {
      ...estado,
      [name]: value,
    };
    setEstado(nuevoValor);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (modoEdicion) {
      const nuevosEjercicios = ejercicios.map((ejercicio) => {
        if (ejercicio.id === estado.id) return { ...estado };

        return ejercicio;
      });
      setEjercicios(nuevosEjercicios);
    } else {
      setEjercicios([
        ...ejercicios,
        { id: Math.floor(Math.random() * 9999), ...estado },
      ]);
    }

    popeye("/");
  };

  const cancelar = () => {
    popeye("/");
  };

  useEffect(() => {
    if (modoEdicion && ejercicioSeleccionado) {
      setEstado({ ...ejercicioSeleccionado });
    }
  }, [modoEdicion, ejercicioSeleccionado]);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Tarjeta {...estado} />
      </div>
      <div className="col-sm">
        <EjeciciosFormulario
          onChange={handleChange}
          onSubmit={handleSubmit}
          estado={estado}
          onCancel={cancelar}
          modoEdicion={modoEdicion}
        />
      </div>
    </div>
  );
}

export default EjecicioNuevo;
