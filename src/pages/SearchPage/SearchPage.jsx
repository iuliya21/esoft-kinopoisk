import styles from "./SearchPage.module.css";
import { v4 as uuid } from "uuid";
import InputCheckbox from "../../components/InputCheckbox/InputCheckbox.jsx";
import RangeSlider from "../../components/RangeSlider/RangeSlider.jsx";
import Button from "../../components/Button/Button.jsx";

const genresInputs = [
  { id: "genreDrama", title: "Драма" },
  { id: "genreCriminal", title: "Криминал" },
  { id: "genreMultfilm", title: "Мультфильм" },
  { id: "genreAction", title: "Боевик" },
  { id: "genreComedy", title: "Комедия" },
  { id: "genreAdventures", title: "Приключения" },
  { id: "genreThriller", title: "Триллер" },
  { id: "genreBiography", title: "Биография" },
  { id: "genreFantastic", title: "Фантастика" },
  { id: "genreMelodram", title: "Мелодрама" },
  { id: "genreWar", title: "Военные" },
  { id: "genreSport", title: "Спорт" },
  { id: "genreHorror", title: "Ужасы" },
];

function SearchPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <legend className={styles.title}>Поиск фильма по параметрам</legend>
        <div className={styles.inputsText}>
          <label htmlFor="titleFilm" className={styles.labelText}>
            Название фильма
          </label>
          <input
            type="text"
            id="titleFilm"
            placeholder="Введите название фильма"
            className={styles.inputText}
          />
        </div>
        <div className={styles.inputsCheckbox}>
          <h3 className={styles.titleInput}>Жанр фильма</h3>
          <div>
            {genresInputs.map((genreInput) => (
              <InputCheckbox
                id={genreInput.id}
                title={genreInput.title}
                key={uuid()}
              />
            ))}
          </div>
        </div>
        <div className={styles.rangeSlider}>
          <h3 className={styles.titleInput}>Выберите диапазон</h3>
          <RangeSlider color="#2ecc71" />
        </div>
        <Button text="Поиск" search={true} />
      </form>
    </div>
  );
}

export default SearchPage;
