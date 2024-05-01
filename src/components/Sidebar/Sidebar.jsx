import styles from "./Sidebar.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';


function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <h3 className={styles.title}>Избранное</h3>
        <FavoriteIcon style={{color: "#fc0352"}}/>
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>Смотреть позже</h3>
      </div>
    </div>
  );
}

export default Sidebar;
