import styles from "./CardFilm.module.css";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PropTypes from "prop-types";

function CardFilm({
  title,
  url,
  rate,
  year,
  actors,
  genres,
  shortdescription,
}) {
  const actorsList = actors.join(", ");
  const genresList = genres.join(", ");

  return (
    <div className={styles.card}>
      <div className={styles.headerCard}>
        <div className={styles.icons}>
          <AccessTimeIcon className={styles.later} />
          <FavoriteBorderIcon className={styles.like} />
        </div>

        <div className={styles.rate}>
          <StarIcon style={{ color: "#f5ce42" }} />
          <p className={styles.rating}>{rate}</p>
        </div>
      </div>

      <img src={url} alt={title} className={styles.image} />
      <div className={styles.film}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.year}>{`Год выпуска ${year}`}</p>
        <p className={styles.description}>{shortdescription}</p>
        <p className={styles.description}>{`Актеры: ${actorsList}`}</p>
        <p className={styles.genre}>{`Жанр: ${genresList}`}</p>
        <p className={styles.country}>Страна: Италия</p>
      </div>
    </div>
  );
}

CardFilm.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  rate: PropTypes.number,
  year: PropTypes.number,
  actors: PropTypes.array,
  genres: PropTypes.array,
  shortdescription: PropTypes.string,
};
export default CardFilm;
