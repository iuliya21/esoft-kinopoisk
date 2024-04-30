import styles from "./Main.module.css";
import { useFilmsStore } from "../../services/store";
import CardFilm from "../CardFilm/CardFilm";
import SortPanel from "../SortPanel/SortPanel";

function Main() {
  const { films } = useFilmsStore();

  return (
    <div className={styles.main}>
      <SortPanel />
      <ul className={styles.cards}>
        {films.map(
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
