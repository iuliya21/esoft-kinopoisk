import { useParams } from "react-router-dom";
import styles from "./FilmDetails.module.css";
import { useFilmsStore } from "../../services/store";
import Comment from "../../components/Comment/Comment.jsx";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const comments = [
  {
    author: "1",
    comment:
      "Каждый раз, когда смотрю этот мультфильм, вновь переживаю все эмоции детства. История игрушек 3 - настоящая шедеврная симфония чувств!",
  },
  {
    author: "2",
    comment:
      "Каждый персонаж, каждая сцена, каждая мелочь - все это напоминает мне о том, как прекрасно было быть ребенком. Это не просто мультфильм, это кусочек нашего детства.",
  },
  {
    author: "3",
    comment:
      "История игрушек 3 - это не только продолжение, это погружение в атмосферу незабвенных воспоминаний. Эмоционально, трогательно, но и с глубоким смыслом",
  },
  {
    author: "4",
    comment:
      "Как же здорово, что эта история о дружбе, верности и принятии себя снова и снова возвращается в мою жизнь. Этот фильм как лучший друг, который всегда рядом",
  },
];

function FilmDetails() {
  const { films } = useFilmsStore();
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const maxCommentPage = 3;
  const countPages = Math.ceil(comments.length / maxCommentPage);
  const indexStart =
    Math.floor(countPages / maxCommentPage) +
    (currentPage - 1) * maxCommentPage;
  const indexEnd = indexStart + 3;

  const film = films.find((el) => el.id === Number(params.filmId));

  if (!film) return null;

  const actors = film.actors.join(", ");
  const genres = film.genres.join(", ");

  const handleNextPage = () => {
    if(currentPage < countPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleLastPage = () => {
    if(currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <img src={film.image} alt={film.title} className={styles.image} />
        <div className={styles.description}>
          <div className={styles.header}>
            <p
              className={
                film.rating >= 8.2
                  ? `${styles.colorGreen} ${styles.rate}`
                  : film.rating < 5
                  ? `${styles.colorRed} ${styles.rate}`
                  : `${styles.rate}`
              }
            >
              {film.rating}
            </p>
            <h2 className={styles.title}>{film.title}</h2>
            <p className={styles.text}>{`${film.release}, ${film.country}`}</p>
            <p className={styles.age}>{film.agerating}</p>
          </div>
          <p>{film.fulldescription}</p>
          <div className={styles.subdescription}>
            <p className={styles.text}>{`Актеры: ${actors}`}</p>
            <p>{film.duration}</p>
          </div>
          <p>{`Жанр: ${genres}`}</p>
        </div>
      </div>
      <div className={styles.comments}>
        <h2>Комментарии</h2>
        {comments.slice(indexStart, indexEnd).map(com => (
          <Comment key={uuid()} user={com.author} comment={com.comment}/>
        ))}
        <div className={styles.pagination}>
          <ArrowBackIosNewIcon
            className={styles.arrow}
            onClick={() => handleLastPage()}
          />
          <p className={styles.pageCurrent}>{currentPage}</p>
          <ArrowForwardIosIcon
            className={styles.arrow}
            onClick={() => handleNextPage()}
          />
        </div>
      </div>
    </div>
  );
}

export default FilmDetails;
