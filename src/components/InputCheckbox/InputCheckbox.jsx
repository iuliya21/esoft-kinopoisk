import PropTypes from "prop-types";
import styles from "./InputCheckbox.module.css";

function InputCheckbox({ id, title, name, register }) {
  return (
    <div className={styles.inputs}>
      <input
        type="checkbox"
        id={id}
        className={styles.inputCheckbox}
        name={name}
        {...register(name)}
      />
      <label htmlFor={id} className={styles.labelCheckbox}>
        {title}
      </label>
    </div>
  );
}

InputCheckbox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
};

export default InputCheckbox;
