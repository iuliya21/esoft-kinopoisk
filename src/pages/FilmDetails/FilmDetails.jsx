import { useParams } from "react-router-dom";
import styles from "./FilmDetails.module.css";
import { useFilmsStore } from "../../services/store";
import Comment from "../../components/Comment/Comment.jsx";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Button from "../../components/Button/Button.jsx";
import { useModal } from "../../hooks/useModal.js";
import Modal from "../../components/Modal/Modal.jsx";
import FormAddComment from "../../components/FormAddComment//FormAddComment.jsx";

function FilmDetails() {
  const { films } = useFilmsStore();
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { isModalOpen, openModal, closeModal } = useModal();

  const filmId = Number(params.filmId);

  const film = films.find((el) => el.id === filmId);

  if (!film) return;
  const maxCommentPage = 3;
  const countPages = Math.ceil(film.comments.length / maxCommentPage);

  const indexStart =
    Math.floor(countPages / maxCommentPage) +
    (currentPage - 1) * maxCommentPage;
  const indexEnd = indexStart + 3;

  const actors = film.actors.join(", ");
  const genres = film.genres.join(", ");

  const handleNextPage = () => {
    if (currentPage < countPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage > 1) {
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
        <div className={styles.headerComments}>
          <h2>Комментарии</h2>
          <Button text="Добавить комментарий" onClick={() => openModal()}/>
        </div>

        {film.comments.slice(indexStart, indexEnd).map((com) => (
          <Comment
            key={uuid()}
            user={com.author}
            comment={com.comment}
            date={com.date}
          />
        ))}

        <Pagination
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handleLastPage={handleLastPage}
          countPages={countPages}
        />
      </div>

      {isModalOpen && (
        <Modal onClosePopup={closeModal}>
          <FormAddComment closeModal={closeModal} filmId={filmId}/>
        </Modal>
      )}

    </div>
  );
}

export default FilmDetails;
