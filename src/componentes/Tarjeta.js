import "./estilos/Tarjeta.css";
import circulos from "../imagenes/circulos.png";
import { useContext } from "react";
import { EjerciciosContext } from "./App";

const Tarjeta = ({
  titulo,
  descripcion,
  imagen,
  colorDerecha,
  colorIzquierda,
  id,
}) => {
  const { setEjercicioSeleccionado, mostrarModal } =
    useContext(EjerciciosContext);

  const onClick = () => {
    setEjercicioSeleccionado({
      id,
      titulo,
      descripcion,
      imagen,
      colorIzquierda: colorIzquierda || "#56CCF2",
      colorDerecha: colorDerecha || "#2F80ED",
    });

    mostrarModal();
  };

  return (
    <div onClick={onClick} className="tarjeta-contenedor">
      <div
        className="tarjeta mx-auto fitness-tarjeta"
        style={{
          backgroundImage: `url(${circulos}),linear-gradient(to right, ${
            colorIzquierda || "#56CCF2"
          }, ${colorDerecha || "#2F80ED"})`,
        }}
      >
        <div className="tarjeta-body align-middle ">
          <div className="row">
            <div className="col fitness-tarjeta-imagen">
              <img
                src={imagen}
                alt=""
                className="img-fluid d-none d-md-block"
              />
            </div>
            <div className="col-9 fitness-tarjeta-info">
              <h1 className="col-sm-12 text-wrap text-break text-center text-md-right">
                {titulo}
              </h1>
              <p className=" text-wrap text-break text-center text-md-right">
                {descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tarjeta;
