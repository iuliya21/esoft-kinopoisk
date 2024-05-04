import styles from "./Comment.module.css";
import PropTypes from "prop-types";

function Comment({ user, comment, date }) {

  const commentDate = new Date(date);

  let day = commentDate.getDate();
  day = day < 10 ? "0" + day : day;
  let month = commentDate.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  const year = commentDate.getFullYear();
  let hours = commentDate.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = commentDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <h3>{user}</h3>
        <p
          className={styles.date}
        >{`${day}/${month}/${year} ${hours}:${minutes}`}</p>
      </div>
      <p className={styles.text}>{comment}</p>
    </div>
  );
}

Comment.propTypes = {
  user: PropTypes.string,
  comment: PropTypes.string,
  date: PropTypes.string,
};

export default Comment;
