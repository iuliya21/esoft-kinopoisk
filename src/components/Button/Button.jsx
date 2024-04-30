import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Button.module.css";

function Button({ text, search }) {
  return (
    <div>
      <button className={styles.button}>
        {text} {search && <SearchIcon />}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  search: PropTypes.bool
};

export default Button;
