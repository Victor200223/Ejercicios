import "./estilos/EjerciciosFormulario.css";

const EjeciciosFormulario = ({
  estado,
  onSubmit,
  onChange,
  onCancel,
  modoEdicion,
}) => {
  const { titulo, descripcion, imagen, colorDerecha, colorIzquierda } =
    estado || {};

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="row gx-3 gy-2 ">
        <div className="form-group">
          <input
            type="text"
            className="form-control "
            required
            placeholder="titulo"
            name="titulo"
            onChange={onChange}
            value={titulo}
            required
            minlength="1"
            maxlength="30"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="descripcion"
            name="descripcion"
            onChange={onChange}
            value={descripcion}
            required
            minlength="1"
            maxlength="500"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="imagen"
            name="imagen"
            onChange={onChange}
            value={imagen}
          />
        </div>

        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="colorIzquierda"
            name="colorIzquierda"
            onChange={onChange}
            value={colorIzquierda}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="colorDerecha"
            name="colorDerecha"
            onChange={onChange}
            value={colorDerecha}
          />
        </div>

        <button type="submit" className="btn btn-outline-success col-6">
          {modoEdicion ? "Editar" : "Crear"}
        </button>
        <button
          type="submit"
          className="btn btn-outline-danger col-6"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EjeciciosFormulario;
