import styles from "./CardFilm.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useFilmsStore } from "../../services/store";

function CardFilm({ film }) {
  const {
    addFavoriteFilm,
    removeFavoriteFilm,
    favoritesFilms,
    laterFilms,
    addLaterFilm,
    removeLaterFilm,
  } = useFilmsStore();

  const isLike = favoritesFilms.find((el) => el.id === film.id) ? true : false;

  const isLater = laterFilms.find((el) => el.id === film.id) ? true : false;

  const actorsList = film.actors.join(", ");
  const genresList = film.genres.join(", ");

  const addLike = () => {
    addFavoriteFilm(film);
  };

  const removeLike = (id) => {
    removeFavoriteFilm(id);
  };

  const addLater = () => {
    addLaterFilm(film);
  };

  const removeLater = (id) => {
    removeLaterFilm(id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.headerCard}>
        <div className={styles.icons}>
          <AccessTimeIcon
            className={styles.later}
            style={isLater ? { color: "#ebb434" } : null}
            onClick={isLater ? () => removeLater(film.id) : () => addLater()}
          />

          {isLike ? (
            <FavoriteIcon
              style={{ color: "#fc0352" }}
              onClick={() => removeLike(film.id)}
              className={styles.like}
            />
          ) : (
            <FavoriteBorderIcon
              className={styles.like}
              onClick={() => addLike()}
            />
          )}
        </div>
        <p
          className={
            film.rate >= 7.5
              ? `${styles.rating} ${styles.colorGreen}`
              : film.rate < 5
              ? `${styles.rating} ${styles.colorRed}`
              : `${styles.rating}`
          }
        >
          {film.rate}
        </p>
      </div>

      <img src={film.image} alt={film.title} className={styles.image} />
      <div className={styles.film}>
        <h3 className={styles.title}>{film.title}</h3>
        <p className={styles.year}>{`Год выпуска ${film.release}`}</p>
        <p className={styles.description}>{film.shortdescription}</p>
        <p className={styles.description}>{`Актеры: ${actorsList}`}</p>
        <p className={styles.genre}>{`Жанр: ${genresList}`}</p>
        <p className={styles.country}>{`Страна: ${film.country}`}</p>
      </div>
    </div>
  );
}

CardFilm.propTypes = {
  film: PropTypes.object,
};

export default CardFilm;
