import styles from "./Sidebar.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useFilmsStore } from "../../services/store";
import ClearIcon from "@mui/icons-material/Clear";

function Sidebar() {
  const { favoritesFilms, removeFavoriteFilm, laterFilms, removeLaterFilm } =
    useFilmsStore();

  return (
    <div className={styles.sidebar}>
      <div className={styles.favorite}>
        <div className={styles.container}>
          <h3 className={styles.title}>Избранное</h3>
          <FavoriteIcon style={{ color: "#fc0352" }} />
        </div>
        <ul className={styles.listFilms}>
          {favoritesFilms.map((film) => (
            <li className={styles.elementList} key={film.id}>
              {`${film.title}, ${film.release}`}
              <ClearIcon
                className={styles.clearIcon}
                onClick={() => removeFavoriteFilm(film.id)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>Смотреть позже</h3>
        <AccessTimeIcon style={{ color: "#ebb434" }} />
      </div>
      <ul className={styles.listFilms}>
        {laterFilms.map((film) => (
          <li className={styles.elementList} key={film.id}>
            {`${film.title}, ${film.release}`}
            <ClearIcon
              className={styles.clearIcon}
              onClick={() => removeLaterFilm(film.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
