import styles from "./CardFilm.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useFilmsStore } from "../../services/store";
import { useNavigate } from "react-router-dom";

function CardFilm({ film }) {
  const {
    addFavoriteFilm,
    removeFavoriteFilm,
    favoritesFilms,
    laterFilms,
    addLaterFilm,
    removeLaterFilm,
  } = useFilmsStore();

  const navigate = useNavigate();

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
    <li className={styles.card}>
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
            film.rating >= 8.2
              ? `${styles.rating} ${styles.colorGreen}`
              : film.rating < 5
              ? `${styles.rating} ${styles.colorRed}`
              : `${styles.rating}`
          }
        >
          {film.rating}
        </p>
      </div>

      <img src={film.image} alt={film.title} className={styles.image} />
      <div className={styles.film}>
        <h3 className={styles.title} onClick={() => navigate(`/film/${film.id}`)}>{film.title}</h3>
        <p className={styles.year}>{`Год выпуска ${film.release}`}</p>
        <p className={styles.description}>{film.shortdescription}</p>
        <p className={styles.description}>{`Актеры: ${actorsList}`}</p>
        <p className={styles.genre}>{`Жанр: ${genresList}`}</p>
        <p className={styles.country}>{`Страна: ${film.country}`}</p>
      </div>
    </li>
  );
}

CardFilm.propTypes = {
  film: PropTypes.object,
};

export default CardFilm;
