import React from "react";
import { useGlobalContext } from "../Context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>Results</h2>
        <p>You have scored {correct} of 10</p>

        <button
          className="btn btn-success close-btn"
          style={{ width: "50%" }}
          onClick={closeModal}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
export default Modal;
