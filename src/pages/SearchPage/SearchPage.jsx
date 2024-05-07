import styles from "./SearchPage.module.css";
import { v4 as uuid } from "uuid";
import InputCheckbox from "../../components/InputCheckbox/InputCheckbox.jsx";
import RangeSlider from "../../components/RangeSlider/RangeSlider.jsx";
import Button from "../../components/Button/Button.jsx";
import { useForm } from "react-hook-form";
import { useFilmsStore } from "../../services/store";
import { useState } from "react";
import CardFilm from "../../components/CardFilm/CardFilm.jsx";

const genresInputs = [
  { genre: "genreDrama", title: "Драма" },
  { genre: "genreCriminal", title: "Криминал" },
  { genre: "genreMultfilm", title: "Мультфильм" },
  { genre: "genreAction", title: "Боевик" },
  { genre: "genreComedy", title: "Комедия" },
  { genre: "genreAdventures", title: "Приключения" },
  { genre: "genreThriller", title: "Триллер" },
  { genre: "genreBiography", title: "Биография" },
  { genre: "genreFantastic", title: "Фантастика" },
  { genre: "genreMelodram", title: "Мелодрама" },
  { genre: "genreWar", title: "Военные" },
  { genre: "genreSport", title: "Спорт" },
  { genre: "genreHorror", title: "Ужасы" },
];

function SearchPage() {
  const { films } = useFilmsStore();

  const [currentFilms, setcurrentFilms] = useState([]);
  const [sliderValue, setSliderValue] = useState([1994, 2017]);

  const [errorValidateCheckbox, setErrorValidateCheckbox] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const genres = Object.entries(data)
      .filter((el) => el[1] === true)
      .map((el) => el[0]); // массив выбранных жанров

    genres.length === 0 && !data.title
      ? setErrorValidateCheckbox(true)
      : setErrorValidateCheckbox(false);

    const filterFilms = films.filter(
      (film) =>
        film.title.toLowerCase().includes(data.title.toLowerCase()) &&
        film.release >= sliderValue[0] &&
        film.release <= sliderValue[1] &&
        (genres.length === 0 ||
          film.genres.some((genre) =>
            genres.includes(genre)
          ))
    );
    setcurrentFilms(filterFilms);
    console.log(genres);
  };

  return (
    <>
      <div className={styles.containerForm}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
              {...register("title")}
            />
          </div>
          <div className={styles.inputsCheckbox}>
            <h3 className={styles.titleInput}>Жанр фильма</h3>
            <div>
              {genresInputs.map((genreInput) => (
                <InputCheckbox
                  id={genreInput.genre}
                  name={genreInput.title}
                  title={genreInput.title}
                  register={register}
                  key={uuid()}
                />
              ))}
              {errorValidateCheckbox && (
                <p className={styles.errorCheckbox}>
                  Выберите минимум одну категорию или введите название фильма
                </p>
              )}
            </div>
          </div>
          <div className={styles.rangeSlider}>
            <h3 className={styles.titleInput}>Выберите диапазон</h3>
            <RangeSlider
              color="#2ecc71"
              value={sliderValue}
              setValue={setSliderValue}
            />
          </div>
          <Button text="Поиск" search={true} />
        </form>
      </div>
      <div className={styles.result}>
        {currentFilms.length === 0 ? (
          <h2 className={styles.titleResult}>Ничего не найдено</h2>
        ) : (
          <h2 className={styles.titleResult}>Результаты поиска</h2>
        )}
        <div className={styles.films}>
          {currentFilms.map((film) => (
            <CardFilm film={film} key={uuid()} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
