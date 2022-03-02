import { useState, createContext, useEffect } from "react";
import Ejecicios from "../paginas/Ejercicios";
import EjecicioNuevo from "../paginas/EjercicioNuevo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EjerciciosDatos } from "../recursos/datos";
import { useModal } from "../hooks/useModal";

export const EjerciciosContext = createContext();

const App = () => {
  const [ejercicios, setEjercicios] = useState([]);

  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);

  const { modalVisible, mostrarModal, cerrarModal } = useModal();

  const value = {
    ejercicios,
    setEjercicios,
    ejercicioSeleccionado,
    setEjercicioSeleccionado,
    modalVisible,
    mostrarModal,
    cerrarModal,
  };

  useEffect(() => {
    setEjercicios([...EjerciciosDatos.data]);
  }, []);

  return (
    <EjerciciosContext.Provider value={value}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Ejecicios />} />
          <Route exact path="/ejercicio/nuevo" element={<EjecicioNuevo />} />
        </Routes>
      </Router>
    </EjerciciosContext.Provider>
  );
};

export default App;
