import styles from "./Main.module.css";
import { useFilmsStore } from "../../services/store";
import CardFilm from "../CardFilm/CardFilm";
import SortPanel from "../SortPanel/SortPanel";
import { useState, useEffect } from "react";

function Main() {
  const { films } = useFilmsStore();

  const [currentFilms, setCurrentFilms] = useState();
  const [sortAscending, setSortAscending] = useState(true);
  const [activeButtons, setActiveButtons] = useState({
    film: false,
    multfilm: false,
    serial: false,
    sort: false,
  });

  const filmList = films.filter((film) => film.type === "film");
  const multfilmList = films.filter((film) => film.type === "multfilm");
  const serialList = films.filter((film) => film.type === "serial");

  useEffect(() => {
    setCurrentFilms(films);
  }, [films]);

  const sortRate = (filmsSort) => {
    const sortingFilms = [...filmsSort].sort((a, b) =>
      sortAscending ? a.rating - b.rating : b.rating - a.rating
    );
    setCurrentFilms(sortingFilms);
    setSortAscending((prevState) => !prevState);
    setActiveButtons((prevState) => ({
      ...prevState,
      sort: true,
    }));
  };

  const sortType = (type) => {
    switch (type) {
      case "film":
        if (activeButtons.film) {
          setCurrentFilms(films);
          setActiveButtons((prevState) => ({
            ...prevState,
            film: false,
            sort: false,
          }));
        } else {
          setCurrentFilms(filmList);
          setActiveButtons({
            sort: false,
            film: true,
            multfilm: false,
            serial: false,
          });
        }
        break;
      case "multfilm":
        if (activeButtons.multfilm) {
          setCurrentFilms(films);
          setActiveButtons((prevState) => ({
            ...prevState,
            multfilm: false,
            sort: false,
          }));
        } else {
          setCurrentFilms(multfilmList);
          setActiveButtons({
            sort: false,
            film: false,
            multfilm: true,
            serial: false,
          });
        }
        break;
      case "serial":
        if (activeButtons.serial) {
          setCurrentFilms(films);
          setActiveButtons((prevState) => ({
            ...prevState,
            serial: false,
            sort: false,
          }));
        } else {
          setCurrentFilms(serialList);
          setActiveButtons({
            sort: false,
            film: false,
            multfilm: false,
            serial: true,
          });
        }
        break;
      default:
        break;
    }
  };

  const clearFilter = () => {
    setCurrentFilms(films);
    setActiveButtons((prevState) => ({
      ...prevState,
      film: false,
      multfilm: false,
      serial: false,
      sort: false,
    }));
  };

  if (!currentFilms) return;

  return (
    <div className={styles.main}>
      <SortPanel
        handleRate={() => sortRate(currentFilms)}
        clearFilter={clearFilter}
        activeButtonSort={activeButtons.sort}
        activeButtonFilm={activeButtons.film}
        activeButtonMultfilm={activeButtons.multfilm}
        activeButtonSerial={activeButtons.serial}
        sortType={sortType}
      />
      <ul className={styles.cards}>
        {currentFilms.map((film) => (
          <CardFilm film={film} key={film.id} />
        ))}
      </ul>
    </div>
  );
}

export default Main;
