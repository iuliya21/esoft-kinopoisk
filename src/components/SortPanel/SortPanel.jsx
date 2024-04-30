import Button from "../Button/Button.jsx";
import styles from "./SortPanel.module.css";

function SortPanel() {
  return (
    <div className={styles.panel}>
      <Button text="Сортировка по рейтингу" />
      <Button text="Сортировка по жанру" />
    </div>
  );
}

export default SortPanel;