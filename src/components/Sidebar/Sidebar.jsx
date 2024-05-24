import styles from "./Sidebar.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useFilmsStore } from "../../services/store";
import ClearIcon from "@mui/icons-material/Clear";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";

function Sidebar() {
  const { favoritesFilms, removeFavoriteFilm, laterFilms, removeLaterFilm } =
    useFilmsStore();

  const [isOpen, setIsOpen] = useState(true);
  const openSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const iconStyles = {
    cursor: 'pointer',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  };

  const sidebarStyles = {
    transition: 'transform 0.5s ease-in-out',
    transform: isOpen ? 'translateX(285px)' : 'translateX(0)'
  }

  return (
    <div className={styles.sidebar} style={sidebarStyles}>
      <DoubleArrowIcon
        style={iconStyles}
        onClick={openSidebar}
      />
      <div>
        <div className={styles.container}>
          <h3 className={styles.title}>Избранное</h3>
          <FavoriteIcon style={{ color: "#fc0352" }} />
        </div>
        <ul className={styles.listFilms}>
          {favoritesFilms.map((film) => (
            <li className={styles.elementList} key={film.id}>
              {`${film.title}, ${film.release}`}
              <ClearIcon
                className={styles.clearIcon}
                onClick={() => removeFavoriteFilm(film.id)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className={styles.container}>
          <h3 className={styles.title}>Смотреть позже</h3>
          <AccessTimeIcon style={{ color: "#ebb434" }} />
        </div>
        <ul className={styles.listFilms}>
          {laterFilms.map((film) => (
            <li className={styles.elementList} key={film.id}>
              {`${film.title}, ${film.release}`}
              <ClearIcon
                className={styles.clearIcon}
                onClick={() => removeLaterFilm(film.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
