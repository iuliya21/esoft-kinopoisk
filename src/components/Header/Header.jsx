import Button from "../Button/Button.jsx";
import styles from "./Header.module.css";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <h1 className={styles.logo}>КиноДом</h1>
        <OtherHousesIcon />
      </div>
      <Button text="Поиск" search={true}/>
    </header>
  );
}

export default Header;
