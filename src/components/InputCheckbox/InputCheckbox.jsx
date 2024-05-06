import PropTypes from "prop-types";
import styles from "./InputCheckbox.module.css";

function InputCheckbox({ id, title }) {
  return (
    <div className={styles.inputs}>
      <input type="checkbox" id={id} className={styles.inputCheckbox} />
      <label htmlFor={id} className={styles.labelCheckbox}>
        {title}
      </label>
    </div>
  );
}

InputCheckbox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputCheckbox;
