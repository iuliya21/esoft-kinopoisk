import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import CloseIcon from "@mui/icons-material/Close";

const modalRoot = document.getElementById("react-modals");

function Modal({ children, onClosePopup }) {
  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.key === "Escape") {
        onClosePopup();
      }
    };
    document.addEventListener("keydown", closeByEsc);

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [onClosePopup]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalOverlay onClosePopup={onClosePopup}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <CloseIcon className={styles.iconClose} onClick={() => onClosePopup()}/>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onClosePopup: PropTypes.func,
};

export default Modal;
