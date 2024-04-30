import styles from "./Header.module.css";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <p className={styles.logo}>КиноДом</p>
        <OtherHousesIcon />
      </div>
    </header>
  );
}

export default Header;
