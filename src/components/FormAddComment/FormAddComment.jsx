import styles from "./FormAddComment.module.css";
import Button from "../Button/Button.jsx";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useFilmsStore } from "../../services/store.js";

function FormAddComment({ closeModal, filmId }) {
  const { addComment } = useFilmsStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (textComment) => {
    const currentDate = new Date();
    const comment = {
      'author': "Анонимный пользователь",
      'comment': textComment.comment,
      'date': currentDate.toISOString()
    };
    addComment(filmId, comment);
    closeModal();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <legend className={styles.title}>Введите комментарий к фильму</legend>
      <textarea
        name="comment"
        className={styles.textarea}
        {...register("comment", {
          required: true,
          maxLength: {
            value: 250,
            message: "Количество символов не должно превышать 250",
          },
          minLength: {
            value: 5,
            message: "Минимальное количество символов 5",
          },
        })}
      ></textarea>
      {errors.comment && (
        <p className={styles.error}>{errors.comment.message}</p>
      )}
      {errors.comment && errors.comment.type === "required" && (
        <p className={styles.error}>Комментарий обязателен к заполнению</p>
      )}
      <Button type="submit" text="Отправить" />
    </form>
  );
}

FormAddComment.propTypes = {
  closeModal: PropTypes.func,
  filmId: PropTypes.number,
};

export default FormAddComment;
