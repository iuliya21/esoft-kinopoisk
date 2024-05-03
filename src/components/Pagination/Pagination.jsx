import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./Pagination.module.css";

function Pagination({ currentPage, handleNextPage, handleLastPage }) {
  return (
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
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  handleNextPage: PropTypes.func,
  handleLastPage: PropTypes.func,
};

export default Pagination;
