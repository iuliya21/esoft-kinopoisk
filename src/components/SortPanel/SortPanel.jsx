import Button from "../Button/Button.jsx";
import styles from "./SortPanel.module.css";
import PropTypes from "prop-types";

function SortPanel({
  handleRate,
  clearFilter,
  activeButtonSort,
  activeButtonFilm,
  activeButtonMultfilm,
  activeButtonSerial,
  sortType,
}) {
  return (
    <div className={styles.panel}>
      <Button
        text="Сортировка по рейтингу"
        onClick={handleRate}
        iconSort={true}
        active={activeButtonSort}
      />
      <Button
        text="Фильм"
        onClick={() => sortType("film")}
        active={activeButtonFilm}
      />
      <Button
        text="Сериал"
        onClick={() => sortType("serial")}
        active={activeButtonSerial}
      />
      <Button
        text="Мультфильм"
        onClick={() => sortType("multfilm")}
        active={activeButtonMultfilm}
      />
      <Button text="Сбросить фильтры" onClick={clearFilter} />
    </div>
  );
}

SortPanel.propTypes = {
  handleRate: PropTypes.func,
  clearFilter: PropTypes.func,
  activeButtonSort: PropTypes.bool,
  activeButtonFilm: PropTypes.bool,
  activeButtonMultfilm: PropTypes.bool,
  activeButtonSerial: PropTypes.bool,
  sortType: PropTypes.func,
};

export default SortPanel;
