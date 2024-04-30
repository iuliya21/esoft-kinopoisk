import { useFilmsStore } from "../../services/store";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./App.module.css";
import { useEffect } from "react";

function App() {
  const { fetchFilms } = useFilmsStore();

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
