import { useFilmsStore } from "../../services/store";
import CardFilm from "../CardFilm/CardFilm";
import Header from "../Header/Header";
import styles from "./App.module.css";
import { useEffect } from "react";

function App() {
  const { films, fetchFilms } = useFilmsStore();

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <ul className={styles.cards}>
        {films.map(({ id, title, image, rating, release, actors, genres, shortdescription }) => (
          <li key={id}>
            <CardFilm
              title={title}
              url={image}
              rate={rating}
              year={release}
              actors={actors}
              genres={genres}
              shortdescription={shortdescription}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
