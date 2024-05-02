import styles from "./Comment.module.css";
import PropTypes from "prop-types";

function Comment({ user, comment }) {
  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <h3>{user}</h3>
        <p className={styles.date}>12/06/2024 11:38</p>
      </div>
      <p className={styles.text}>
        {comment}
      </p>
    </div>
  );
}

Comment.propTypes = {
  user: PropTypes.string,
  comment: PropTypes.string,
};

export default Comment;
