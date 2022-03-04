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
      <h2>{modoEdicion ? "Editar tarjeta" : "Crear tarjeta"}</h2>
      <form onSubmit={onSubmit} className="row gx-3 gy-2 ">
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
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
          <label htmlFor="descripcion">Descripcion</label>
          <textarea
            type="text"
            className="form-control mt-1"
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
          <label htmlFor="imagen">Imagen</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="imagen"
            name="imagen"
            onChange={onChange}
            value={imagen}
          />
        </div>

        <div className="col-6">
          <label htmlFor="colorIzquierda">Color izquierda</label>
          <input
            type="color"
            className="form-control mt-1"
            placeholder="colorIzquierda"
            name="colorIzquierda"
            onChange={onChange}
            value={colorIzquierda}
          />
        </div>

        <div className="col-6">
          <label htmlFor="colorDerecha">Color derecha</label>
          <input
            type="color"
            className="form-control mt-1"
            placeholder="colorDerecha"
            name="colorDerecha"
            onChange={onChange}
            value={colorDerecha}
          />
        </div>

        <div className="col-12 d-flex justify-content-between mt-3">
          <button
            type="submit"
            className="btn btn-outline-success col-6"
            style={{ width: "49%" }}
          >
            {modoEdicion ? "Editar" : "Crear"}
          </button>
          <button
            type="submit"
            className="btn btn-outline-danger col-6"
            onClick={onCancel}
            style={{ width: "49%" }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EjeciciosFormulario;
