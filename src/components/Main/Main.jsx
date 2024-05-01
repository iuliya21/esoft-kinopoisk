import styles from "./Main.module.css";
import { useFilmsStore } from "../../services/store";
import CardFilm from "../CardFilm/CardFilm";
import SortPanel from "../SortPanel/SortPanel";
import { useState, useEffect } from "react";

function Main() {
  const { films } = useFilmsStore();

  const [currentFilms, setCurrentFilms] = useState();
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    setCurrentFilms(films);
  }, [films]);

  const sortingRate = () => {
    const sortingFilms = [...currentFilms].sort((a, b) =>
    sortAscending ? a.rating - b.rating : b.rating - a.rating
    );
    setCurrentFilms(sortingFilms);
    setSortAscending(prevState => !prevState)
  };

  if (!currentFilms) return;

  return (
    <div className={styles.main}>
      <SortPanel handleRate={sortingRate} />
      <ul className={styles.cards}>
        {currentFilms.map(
          ({
            id,
            title,
            image,
            rating,
            release,
            actors,
            genres,
            shortdescription,
            country,
          }) => (
            <li key={id}>
              <CardFilm
                title={title}
                url={image}
                rate={rating}
                year={release}
                actors={actors}
                genres={genres}
                shortdescription={shortdescription}
                country={country}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Main;
