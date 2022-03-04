import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { EjerciciosContext } from "./App";
import { useNavigate } from "react-router";
import circulos from "../imagenes/circulos.png";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./estilos/MiModal.css";

const MiModal = () => {
  const {
    modalVisible,
    cerrarModal,
    ejercicioSeleccionado,
    ejercicios,
    setEjercicios,
  } = useContext(EjerciciosContext);
  const popeye = useNavigate();

  const editar = () => {
    cerrarModal();
    return popeye(`/ejercicio/nuevo?modoEdicion=true`);
  };

  const cerrar = () => {
    cerrarModal();
  };

  const eliminar = () => {
    setEjercicios(
      ejercicios.filter(
        (ejercicio) => ejercicio.id !== ejercicioSeleccionado.id
      )
    );
    cerrarModal();
  };

  const { titulo, descripcion, imagen, colorDerecha, colorIzquierda } =
    ejercicioSeleccionado || {};

  return (
    <div className="container align-middle">
      <Modal show={modalVisible} onHide={cerrarModal} className="cc">
        <div
          style={{
            backgroundImage: `url(${circulos}),linear-gradient(to right, ${colorIzquierda}, ${colorDerecha})`,
            borderRadius: 8,
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={imagen} alt="" style={{ maxWidth: "50%" }} />
            <p style={{ wordBreak: "break-all" }}>{descripcion}</p>
          </Modal.Body>
          <Modal.Footer>
            <div
              className="botones btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn eliminar "
                onClick={eliminar}
              >
                <AiFillDelete />
              </button>
              <button type="button" className="btn editar" onClick={editar}>
                <AiFillEdit />
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default MiModal;
