import Button from "../Button/Button.jsx";
import styles from "./Header.module.css";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup} onClick={() => navigate("/")}>
        <h1 className={styles.logo}>КиноДом</h1>
        <OtherHousesIcon />
      </div>
      <Button text="Поиск" search={true} onClick={() => navigate("/search")}/>
    </header>
  );
}

export default Header;
