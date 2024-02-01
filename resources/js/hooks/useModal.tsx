import { useState } from "react";

export const useModal = () => {
  const [visibilityModal, setVisibilityModal] = useState(false);

  const openModal = () => {
    setVisibilityModal(true);
  };

  const closeModal = () => {
    setVisibilityModal(false);
  };

  const handleOk = (fn: () => void) => {
    closeModal();
    fn();
  };

  const handleCancel = () => {
    openModal();
    return false;
  };

  return { visibilityModal, openModal, closeModal, handleCancel, handleOk };
};
