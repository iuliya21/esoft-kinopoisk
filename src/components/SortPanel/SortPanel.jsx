import Button from "../Button/Button.jsx";
import styles from "./SortPanel.module.css";
import PropTypes from "prop-types";

function SortPanel({ handleRate }) {

  return (
    <div className={styles.panel}>
      <Button text="Сортировка по рейтингу" onClick={() => handleRate()}/>
      <Button text="Сортировка по жанру" />
    </div>
  );
}

SortPanel.propTypes = {
  handleRate: PropTypes.func,
};

export default SortPanel;
