import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ children, onClosePopup }) {
  return (
    <div className={styles.overlay} onClick={onClosePopup}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.node,
  onClosePopup: PropTypes.func,
};

export default ModalOverlay;
