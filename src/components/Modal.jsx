import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, size }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80 z-10 drop-shadow-2xl"
      ></div>
      <div
        className={
          "flex overflow-auto fixed bg-orange-600 rounded-md z-20 " + size
        }
      >
        {children}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
