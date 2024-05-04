import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import styles from "./Button.module.css";

function Button({ text, search, onClick, iconSort, active, type }) {
  return (
    <div>
      <button
        className={
          active ? `${styles.button} ${styles.active}` : `${styles.button}`
        }
        onClick={onClick ? () => onClick() : undefined}
        type={type}
      >
        {text} {search && <SearchIcon />} {iconSort && <ImportExportIcon />}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  search: PropTypes.bool,
  onClick: PropTypes.func,
  iconSort: PropTypes.bool,
  active: PropTypes.bool,
  type: PropTypes.string
};

export default Button;
