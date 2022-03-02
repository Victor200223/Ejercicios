import "./estilos/BotonAgregar.css";
import { Link } from "react-router-dom";

function BotonAgregar() {
  return (
    <div className="">
      <Link to="/ejercicio/nuevo" className="btn botonAgregar">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"
          alt=""
          className="img-fluid"
        />
      </Link>
    </div>
  );
}
export default BotonAgregar;
