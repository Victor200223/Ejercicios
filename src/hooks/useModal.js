import { useState } from "react";

export const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const mostrarModal = () => setModalVisible(true);

  const cerrarModal = () => setModalVisible(false);

  return {
    modalVisible,
    mostrarModal,
    cerrarModal,
  };
};
